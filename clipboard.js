document.getElementById("text-to-copy").addEventListener("click", function() {
    const textToCopy = this.innerText.trim();
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            this.classList.add('copied');
            setTimeout(() => {
                this.classList.remove('copied');
            }, 1000);
        })
        .catch(err => {
            console.error("Error:", err);
        });
}); 