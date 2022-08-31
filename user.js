const loaduser = () => {
    const url =`https://randomuser.me/api/?gender=female`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayusers(data.results[0]))
}
const asyncloaduser = async()=> {
    const url =`https://randomuser.me/api/?gender=female`;
    try{
        const res = await fetch(url)
        const data = await res.json()
        displayusers(data.results[0])
    }
    catch(error){
        console.log(error)
    }
}

const displayusers = user => {
  console.log(user);
}
