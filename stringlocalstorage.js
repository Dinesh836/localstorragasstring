<html>
    <body>
        <form onsubmit="saveToLocalStorage(e)">
            <label>Name:</label>
            <input type="text" name="username" required>
            <label>Email:</label>
            <input type="email" name="emailId" required>
            <label>Mobile No:</label>
            <input type="number" name="phoneNo" required>
            <button>Submit</button>
        </form>
        <script>
            function saveToLocalStorage(e){
                event.preventDefault();
                const name=e.target.username.value;
                const email=e.target.emailId.value;
                const mobile=e.target.phoneNo.value;
                localStorage.setItem('name',name);
                localStorage.setItem('email',email);
                localStorage.setItem('phoneNo',phoneNo);
                const newObj={
                    name:name;
                    email:email;
                    mobile:mobile;
                }
                localStorage.setItem('userDetails',JSON.stringify(newObj);)
            }
        </script>
    </body>
</html>
