#!/usr/bin/env python3

from dotenv import load_dotenv

load_dotenv("../.env.local")
import csv
import json
import os
import sys
from typing import Dict, List, Optional

import requests

CLERK_API_KEY = os.getenv("CLERK_SECRET_KEY")
CLERK_API_URL = "https://api.clerk.com/v1/users"

def read_users_from_csv(csv_path: str) -> List[Dict[str, str]]:
    """Read user data from a CSV file."""
    users = []
    with open(csv_path, 'r') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            users.append(row)
    return users

def create_user(user_data: Dict[str, str]) -> Dict:
    """Create a user in Clerk using the API."""
    headers = {
        "Authorization": f"Bearer {CLERK_API_KEY}",
        "Content-Type": "application/json"
    }
    
    response = requests.post(CLERK_API_URL, headers=headers, json=user_data)
    return response.json()

def main(csv_path: Optional[str] = None):
    if not csv_path:
        csv_path = "users.csv"
    
    print(f"Reading users from {csv_path}...")
    users = read_users_from_csv(csv_path)
    print(f"Found {len(users)} users to create")
    
    success_count = 0
    failure_count = 0
    
    for user in users:
        print(f"Creating user: {user.get('username', user.get('email', 'Unknown'))}")
        result = create_user(user)
        
        if "id" in result:
            success_count += 1
            print(f"✓ Success! User created with ID: {result['id']}")
        else:
            failure_count += 1
            print(f"✗ Failed to create user. Error: {json.dumps(result)}")
    
    print(f"\nSummary: {success_count} users created, {failure_count} failures")

if __name__ == "__main__":
    csv_file = sys.argv[1] if len(sys.argv) > 1 else None
    main(csv_file)
