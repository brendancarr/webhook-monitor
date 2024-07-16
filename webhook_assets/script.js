        function fetchData() {
            fetch('get_data.php')
                .then(response => response.json())
                .then(data => {
                    document.getElementById('webhook-data').textContent = JSON.stringify(data, null, 2);
                })
                .catch(error => console.error('Error fetching data:', error));
        }
        
        function clearData() {
            fetch('clear_data.php')
                .then(response => response.json())
                .then(result => {
                    if (result.status === 'success') {
                        document.getElementById('webhook-data').textContent = '';
                    } else {
                        console.error('Error clearing data:', result.message);
                    }
                })
                .catch(error => console.error('Error clearing data:', error));
        }
        
        document.getElementById('clear-button').addEventListener('click', clearData);
        
        // Fetch data when the document first loads
        document.addEventListener('DOMContentLoaded', (event) => {
            fetchData();
            setInterval(fetchData, 2000); // Fetch data every 2 seconds
        });