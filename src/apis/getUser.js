const getUser  = async (id) => {
    try {
        const res = await fetch (
           `http://jsonplaceholder.typicode.com/user/${id}`
        );
        if (!res.ok) {
            throw new Error (`HTTP error! status: ${res.status}`);
        }

        const user = await res.json();
        return user;
    }  catch (err){
        console.error(err);
    }
};

export default getUser