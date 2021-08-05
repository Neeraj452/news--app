import React,{useState,useEffect} from 'react';
import './index.css';
const App = () =>{

                 const [updates, setNewsUpdates] = useState([])

                 const[search,setSearchQuery] = useState("react");
                 const[url,seturl] = useState('https://hn.algolia.com/api/v1/search?query=react');
                 const findnews = () =>{
                       // find new based on react
                       fetch(`https://hn.algolia.com/api/v1/search?query=${search}`)
                      // fetch(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=53f6b76dfd954e99a7be892b21628d64`)
                       //Convert into json
                       .then(result => result.json())
                       //setNewsUpdate pass
                      // .then(data =>console.log(data))
                       .then(data =>setNewsUpdates(data.hits))
                       .catch(err =>console.log(err));
                 }
            
            useEffect(() => {
                  findnews()
                       },[url])
            const makerChange = (e)=>{
                  //Basedon user input read the data
                  setSearchQuery(e.target.value)
            }
            
            const handelinput=(e)=>{
                  e.preventDefault()
                  seturl(`https://hn.algolia.com/api/v1/search?query=${search}`)
            }
                  return(
                        <>
                          <h1>News App Project</h1>
                          <form onSubmit={handelinput}>
                                <input type="text" value= {search} onChange={makerChange}/>
                                <button> Search news here</button>
                          </form>
                               {updates.map((n,i) =>(
                                     <div className="content">
                               <p key={i} > {n.title}</p>
                               </div>
                               ))}
                        </>)
            
}
export default App;