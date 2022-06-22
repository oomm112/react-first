## HTTP Connect (fetch / axios)
1. async : 비동기 처리를 위한 promise 동작을 한다는것을 명시
2. await : 결과를 기다리는 함수 앞에 작성


# fetch
ex) function fetchHandler() {<br>
fetch(url, [option]).then(() => {});<br>
}

# Example
function fetchHandler() {<br>
  fetch(url, {<br>
    method: "GET" OR "POST"<br>
    headers: {<br>
      'Context-type':'application/json'<br>
      'key':'val'<br>
    }<br>
    }).then(response => {...});<br>
}

# Exception hanldling?
try{<br>
  if(!response.ok){<br>
    throw new Error('Error');<br>
  }<br>
}catch(error){<br>
  //Error Exception code<br>
}<br>


# axios
ex) axios.[method](url, [option]).then(() => {}).catch(() => {});

# Example
function axiosHandler() {<br>
  axios.post("url",{<br>
    title: 'title',<br>
    content: 'content'<br>
    }).then().catch();<br>
}

# Exception handling?
.catch()가 붙어있음 
