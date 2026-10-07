const hello  = () => {
return<h2> welcome to react 19</h2>


}

export default  function App() {
    return ( <>
    
        <h1 className="text-4xl text-center bg-gray-600 text-white my-2p-2">
            Hello World
            </h1>
            <hello/> 
            </>
);
}
const book = () => {
    return <>
       <h1>The Great Gatsby</h1>
       <h2>Price: ${10.99}</h2>
       <h3>Rating: {4.5}</h3>
        </>
    };


