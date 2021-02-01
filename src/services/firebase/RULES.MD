### Règles Firebase

    {
      "rules": {
        "products-owner": {
          "$uid": {
            ".write": "auth.uid === $uid",
            ".read": "auth.uid === $uid"
          }
        }
      }
    }
