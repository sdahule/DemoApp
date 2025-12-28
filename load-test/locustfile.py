from locust import HttpUser, task, between

class LoginUser(HttpUser):
    wait_time = between(1, 3)

    @task
    def login(self):
        # The backend is protected by Basic Auth
        # swapnil:pass -> base64 -> c3dhcG5pbDpwYXNz
        headers = {
            "Authorization": "Basic c3dhcG5pbDpwYXNz"
        }
        self.client.get("/api/login", headers=headers)
