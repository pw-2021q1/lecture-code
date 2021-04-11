import * as path from "path"

export const config = {
    "server-port": 3000,
    "db": {
        "url": "mongodb://localhost:27017",
        "name": "associated-consulting", 
        "collections": {
            "profiles": "profiles",
            "sequences": "sequences",
            "admins": "admins",
            "sessions": "sessions"
        }
    }, 
    "upload_dir": path.resolve(__dirname, "..", "uploads"),
    "secret": "ff743fb0dc08ee859d8a854157e6c54c"
}
