fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1')
			.then(response => response.json())
			.then(data => {
				const tableBody = document.getElementById('table-body');
				data.forEach(currency => {
					const tr = document.createElement('tr');
					tr.innerHTML = `
						<td>${currency.id}</td>
						<td>${currency.symbol}</td>
						<td>${currency.name}</td>
					`;
					if (currency.symbol === 'usdt') {
						tr.classList.add('usdt');
					} else if (data.indexOf(currency) < 5) {
						tr.classList.add('top');
					}
					tableBody.appendChild(tr);
				});
			})
			.catch(error => console.error(error));