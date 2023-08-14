function network(url, fn) {
    fn({data: url})
  }
  
  const fn = function (params) {
    console.log(params.data)
    network(`${params.data}|second`, function (params) {
      console.log(params.data)
      network(`${params.data}|third`, function (params) {
        console.log(params.data)
        network(`${params.data}|fourth`, function (params) {
          console.log(params.data)
          network(`${params.data}|fifth`, function (params) {
            console.log(params.data)
          })
        })
      })
    })
  }
  
  network('first', fn)