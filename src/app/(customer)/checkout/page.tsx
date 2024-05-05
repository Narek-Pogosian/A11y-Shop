import PageTitle from "@/components/page-title";
import CartWrapper from "./_components/cart-wrapper";
import CheckoutForm from "./_components/checkout-form";

function CheckoutPage() {
  return (
    <>
      <PageTitle>Checkout</PageTitle>
      <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <section
          aria-labelledby="cart-list"
          className="h-fit rounded border bg-element p-2 py-4 xs:px-6 xl:sticky xl:top-4"
        >
          <h2 className="mb-4 text-xl font-bold" id="cart-list">
            Cart Info
          </h2>
          <CartWrapper />
        </section>
        <section
          className="h-fit rounded border bg-element p-2 py-4 xs:px-6 lg:order-first xl:col-span-2"
          aria-labelledby="checkout-form-section"
        >
          <h2 className="mb-4 text-xl font-bold" id="checkout-form-section">
            Checkout Form
          </h2>
          <CheckoutForm />
        </section>
      </div>
    </>
  );
}

export default CheckoutPage;
