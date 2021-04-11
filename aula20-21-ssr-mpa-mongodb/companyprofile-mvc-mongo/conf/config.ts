import * as path from "path"

export const config = {
    "server-port": 3000,
    "db": {
        "url": "mongodb://localhost:27017",
        "name": "associated-consulting", 
        "collections": {
            "profiles": "profiles",
            "sequences": "sequences"
        }
    }, 
    "upload_dir": path.resolve(__dirname, "..", "uploads")
}
