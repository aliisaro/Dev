function UserGreeting(props) {
    const isLoggedIn = props.isLoggedIn;

    // Conditional rendering using the ternary operator
    return (
        <div>
               {isLoggedIn ? (
                   <h1>Welcome back, User!</h1>
               ) : (
                   <h1>Please log in to continue</h1>
               )}
        </div>
    );
}

export default UserGreeting;