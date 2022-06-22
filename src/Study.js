import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import React, {useState, useEffect, useRef} from 'react';

function ApiConnect(){
  const [data, setData] = useState('');
  const [params, setParams] = useState([]);
  const [num, setNum] = useState(1);
  const [url, setUrl] = useState('');
  const [inputs, setInputs] = useState({
    key: '',
    value: ''
  });
  const {key, value} = inputs;
  const [forms, setForms] = useState({
    ...inputs
  });

  function conApi(){
      axios.post(url,
        {
          goods_id:"22897",
          option_id:"123927",
          start_date:"2022-05-13",
          end_date:"2022-05-14",
          adult:"2",
          child:"0",
          baby:"0"
        },
        {
        headers: {
          'Authorization':'12go',
          'Accept':'application/json',
          'Content-Type': 'application/json;charset=UTF-8'
        }
      }).then((response) => {
        setData(JSON.stringify(response.data));
        console.log(data);
      }).catch((response) => {
        setData("Error!");
        console.log("Error!");
    });
  }

  function AddChildNum(){
    setParams(
      params.concat(num)
    );
    setNum(num+1);
  }

  function OnURL(e){
    const url = e.target.value;
    setUrl(url);
  }

  function addParam(e){
    const {value, name} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
    console.log(inputs);
  }

  return(
    <div className="main content">
      <div className="dataArea">
        <h1>This is Main Page</h1>
        <textarea className="jsonTextArea" value={data} readOnly rows='30' cols='40'></textarea>
      </div>
      <div className="paramArea">
        <h2>Add Param (Body) [Post]</h2>
        <b>URL</b> <input type="text" onChange={OnURL}/><br/>
        <button onClick={AddChildNum}>+</button><br/>
        <table border="1px solid black">
          <thead>
            <tr>
              <th>No</th>
              <th>key</th>
              <th>value</th>
            </tr>
          </thead>
          <tbody>
          {params.map((i) => (
            <tr key={i}>
              <td>{i}</td>
              <td><input name="key" type="text" key={"key"+i} onChange={addParam}/></td>
              <td><input name="value" type="text" key={"value"+i} onChange={addParam}/></td>
           </tr>
         ))}
          </tbody>
          </table>
        <button onClick={conApi}>Submit</button>
      </div>
      <form>
        {params.map((i) => (
          <input type="text" readOnly/>
        ))}
      </form>
    </div>
  );
}

class Study extends React.Component{
  render(){
    return(
        <div>
          <ApiConnect />
        </div>
    );
  }
}

export default Study;
