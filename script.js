$.post("https://ipl.e-imo.com/api/v3/actions/categorize",
    {
       headers: {
            'Authorization':'Basic: ' + Base64Encode('9250e76fa8da4f42b9061d4b69f887f9' + ':' +  'AF9AC67D32F8BF7609EDAEF56EF3F82DFF7630214CCB824215DBA17F413E4425'),
            'Content-Type':'application/json',
            'Accept':'application/json',
            'Request': {
                "Problems": [
                    {
                        "FreeText": "Heart Attack",
                    },
                    {
                        "FreeText": "sty"
                    }
                ]
            }
        },
    },
    function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
});