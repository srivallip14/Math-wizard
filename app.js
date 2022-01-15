(function () {
	class Pool {
  	constructor(input1, input2, operator) {
    	this.input1 = input1;
			this.input2 = input2;
			this.operator = operator;
    }
  }

	$(document).ready(() => {
  	const problemPool = [];
    
    for (i = 0; i < 1; i++) {
    	for (j = 1; j < 11; j++) {
      	for (k = 1; k < 11; k++) {
        	for (l = 0; l < 2; l++) {
						if (l == 1 && j < k) {
							continue;
						}
					
          	problemPool.push(new Pool(j, k, l == 0 ? '+' : '-'));
          }
        }
      }
    }
		
		function getRandomInt(max) {
			return Math.floor(Math.random() * max);
		}
    
    const reset = () => {
			try {
				const index = getRandomInt(problemPool.length);
				$('#lblLeft').text(problemPool[index].input1);
				$('#lblRight').text(problemPool[index].input2);
				$('#lblOperator').text(problemPool[index].operator);	
				$('#answer').val('');
			}
			catch(e) {
				alert(e);
			}
    };
		
		const validate = () => {
			const left = Number($('#lblLeft').text());
			const right = Number($('#lblRight').text());
			const op = $('#lblOperator').text();	
			const res = Number($('#answer').val());
			
			if ($('#answer').val().length == 0) return false;
			
			const ans = op == '+' ? left + right : left - right;
			
			if (ans != res) {
				for (i = 0; i < 20; i++) {
					problemPool.push(new Pool(left, right, op));
				}
				
				$('body').css('background', 'red');
			} else {
				$('body').css('background', 'green');
			}
			
			return true;
		};
		
		$('#answer').blur(() => {
			if (validate()) {
    		reset();
			}
    });
		
		$('#answer').keypress(function(event){
				var keycode = (event.keyCode ? event.keyCode : event.which);
				if(keycode == '13'){
					if (validate()) {
						reset();
					}
				}
		});
    
  });
  

})();
