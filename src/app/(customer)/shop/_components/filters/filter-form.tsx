import {
  type ProductSearchFormType,
  producSeachFormSchema,
} from "@/lib/validations/products-searchparams";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { categories } from "@/config/categories";
import { Button } from "@/components/ui/button";
import { setSearchQueries } from "@/lib/utils/search-params";
import { useRouter, useSearchParams } from "next/navigation";
import { currency } from "@/lib/utils";

interface FilterFormProps {
  closeDialog: () => void;
}

function FilterForm({ closeDialog }: FilterFormProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const form = useForm<ProductSearchFormType>({
    resolver: zodResolver(producSeachFormSchema),
    defaultValues: {
      // @ts-expect-error We validate the searchparams in page.tsx.
      category: searchParams.get("category") ?? "",
      minPrice: searchParams.get("minPrice") ?? "0",
      maxPrice: searchParams.get("maxPrice") ?? "100",
    },
  });

  function onSubmit(values: ProductSearchFormType) {
    if (values.maxPrice === "100") {
      values.maxPrice = undefined;
    }
    if (values.minPrice === "0") {
      values.minPrice = undefined;
    }

    const link = setSearchQueries(values);
    router.push(link);
    closeDialog();
  }

  return (
    <Form {...form}>
      <form className="grid gap-6" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Choose one category to show.</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex gap-6"
                >
                  <FormItem className="flex items-center gap-1">
                    <FormControl>
                      <RadioGroupItem value="" />
                    </FormControl>
                    <FormLabel>All</FormLabel>
                  </FormItem>
                  {Object.entries(categories).map(([key, value]) => (
                    <FormItem className="flex items-center gap-1" key={key}>
                      <FormControl>
                        <RadioGroupItem value={key} />
                      </FormControl>
                      <FormLabel className="m">{value.label}</FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="maxPrice"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Maximum Price{" "}
                <span aria-hidden>({currency(field.value!)})</span>
              </FormLabel>
              <FormControl>
                <input
                  type="range"
                  value={field.value}
                  onChange={field.onChange}
                  min={0}
                  max={100}
                  className="block w-full"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="minPrice"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Minimum Price{" "}
                <span aria-hidden>({currency(field.value!)})</span>
              </FormLabel>
              <FormControl>
                <input
                  type="range"
                  value={field.value}
                  onChange={field.onChange}
                  min={0}
                  max={100}
                  className="block w-full"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Apply Filters</Button>
      </form>
    </Form>
  );
}

export default FilterForm;
