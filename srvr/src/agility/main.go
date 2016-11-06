package main

import (
	"fmt"
	"net/http"
	"os"
)

func main() {
	fs := http.FileServer(http.Dir("www"))
	http.Handle("/", fs)

	port := os.Getenv("PORT")
	if port == "" {
		port = "3200"
	}
	port = fmt.Sprintf(":%s", port)
	fmt.Printf("Serving http on port %s\n", port)

	http.ListenAndServe(port, nil)
}
