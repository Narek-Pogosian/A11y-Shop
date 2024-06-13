import PageTitle from "@/components/page-title";
import CartWrapper from "./_components/cart-wrapper";
import CheckoutForm from "./_components/checkout-form";

function CheckoutPage() {
  return (
    <div className="container">
      <PageTitle>Checkout</PageTitle>
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 xl:grid-cols-3">
        <section
          aria-labelledby="cart-list"
          className="h-fit rounded bg-card p-4 xl:sticky xl:top-4"
        >
          <h2 className="sr-only mb-4 text-xl font-bold" id="cart-list">
            Cart Info
          </h2>
          <CartWrapper />
        </section>
        <section
          className="h-fit py-2 lg:order-first xl:col-span-2"
          aria-labelledby="checkout-form-section"
        >
          <h2
            className="sr-only mb-4 text-xl font-bold"
            id="checkout-form-section"
          >
            Checkout Form
          </h2>
          <CheckoutForm />
        </section>
      </div>
    </div>
  );
}

export default CheckoutPage;
