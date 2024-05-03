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
          className="sticky top-4 h-fit rounded border bg-element px-6 py-4"
        >
          <h2 className="mb-2 text-xl font-bold" id="cart-list">
            Cart Info
          </h2>
          <CartWrapper />
        </section>
        <section
          className="lg:order-first xl:col-span-2"
          aria-labelledby="checkout-form"
        >
          <h2 className="mb-2 text-xl font-bold" id="checkout-form">
            Checkout Form
          </h2>
          <CheckoutForm />
        </section>
      </div>
    </>
  );
}

export default CheckoutPage;
