## HTTP Connect (fetch / axios)
1. async : 비동기 처리를 위한 promise 동작을 한다는것을 명시
2. await : 결과를 기다리는 함수 앞에 작성

# -----------------------------------------------------------
# fetch
ex) function fetchHandler() {
  fetch(url, [option]).then(() => {});
}

# Example
function fetchHandler() {
  fetch(url, {
    method: "GET" OR "POST"
    headers: {
      'Context-type':'application/json'
      'key':'val'
    }
    }).then(response => {...});
}

# Exception hanldling?
try{
  if(!response.ok){
    throw new Error('Error');
  }
}catch(error){
  //Error Exception code
}

# -----------------------------------------------------------
# axios
