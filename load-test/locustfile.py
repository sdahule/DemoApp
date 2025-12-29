from locust import HttpUser, task, between
import random
import base64
import itertools

# Global counter to assign unique IDs to each user instance
user_id_counter = itertools.count()

class LoginUser(HttpUser):
    wait_time = between(1, 3)

    def on_start(self):
        # Assign a unique ID to this user instance
        self.user_id = next(user_id_counter)
        self.username = f"user_{self.user_id}"
        self.password = "password"

        # Register the user
        self.client.post("/api/register", json={
            "username": self.username,
            "password": self.password
        }, name="/api/register")

    @task
    def login(self):
        # Pick a random user ID from the currently known range (approximate)
        # We assume IDs start at 0. We'll pick a random ID up to our own ID (or a fixed max if we know total users)
        # To simulate random users logging in, we can pick any ID from 0 to 99 (assuming 100 users)
        random_id = random.randint(0, 99)
        random_username = f"user_{random_id}"
        
        # Prepare Basic Auth header
        credentials = f"{random_username}:password"
        encoded_credentials = base64.b64encode(credentials.encode()).decode()
        headers = {
            "Authorization": f"Basic {encoded_credentials}"
        }

        # Perform login (accessing a protected resource)
        # Since the dashboard or protected API is what constitutes "login" verification
        # We can hit /api/users (which is protected) or /api/login if it existed as a GET check
        # The prompt asked for "perform login". The app handles login via Basic Auth on any protected route.
        # Let's hit /api/users which is confirmed working and protected.
        self.client.get("/api/users", headers=headers, name="/api/users (Login)")

