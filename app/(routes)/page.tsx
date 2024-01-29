import Container from "@/components/ui/container";
import Billboard from "@/components/ui/billboard";
import getBillboard from "@/actions/get-billboard";

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboard("46bf3541-28c9-4e16-95c1-66926ed7035e");
  return (
    <Container>
      <div className='space-y-10 pb-10'>
        <Billboard data={billboard} />
        <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
          {/* <ProductList title='Featured Products' items={products} /> */}
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
