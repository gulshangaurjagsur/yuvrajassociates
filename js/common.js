document.addEventListener("DOMContentLoaded", function () {
			fetch("components/footer.html")
				.then(response => response.text())
				.then(data => {
					document.getElementById("footer-placeholder").innerHTML = data;
				})
				.catch(err => console.error("Footer load error:", err));
                fetch("components/header.html")
                    .then(res => res.text())
                    .then(data => {
                    document.getElementById("header-placeholder").innerHTML = data;
                    initNavbar();
                });
		});