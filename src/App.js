import React , {useEffect , useState} from 'react';
const App = () =>  {
  const [data , setData] = useState([])
  useEffect(() => {
    fetch('/api/academy')
    .then((res) => res.json())
    .then((d) => {
      if(d){
        setData(d)
      }
    })
  } , [])
  return (
    <div className="App">
      <div className = "work">
        <div className = "head">
          Academies
        </div>
        <div className = "container">
          {data.map((a,i) => {
            const arr = ['A' , 'B' , 'C']
            return(
              <div className = {'box'}>
                <div className = {`aca_sym_${i}`}>
                  {arr[i]}
                </div>
                <div className = {'aca_name'}>
                  {a.Name}
                  <div className = "aca_price">
                  {a.Price} per hour
                </div>
                </div>
                <div className = {`col_line_${i}`}>
                  {a.Open ? 'Open' : 'Closed'}
                </div>
                <div className = "aca_players">
                  This academy allow only {a.Players} players at a time.
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
