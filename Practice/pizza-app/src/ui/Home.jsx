import CreateUser from '../features/user/CreateUser'

function Home() {
  return (
    <div className='my-10 sm:my-16 text-center'>
      <h1 className="text-xl font-semibold mb-8 md:text-3xl" >
        The best pizza.
        <br />
        <span className="text-yellow-500">
        Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;
