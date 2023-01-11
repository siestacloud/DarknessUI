kubectl create ns vpervieruki-dev

<!-- helm upgrade --install -n firsthand vpervieruki-dev . -f values.yaml --dry-run
helm upgrade --install -n firsthand vpervieruki-dev . -f values.yaml


docker build --network host -t gopherlearning/dutube:firsthand . -->



```bash

# dev
# расшифровать
cat .helm/values-dev-encrypted.yaml | werf helm secret decrypt -o .helm/values-dev-decrypted.yaml

# зашифровать
cat .helm/values-dev-decrypted.yaml | werf helm secret encrypt -o .helm/values-dev-encrypted.yaml




# prod
# расшифровать
cat .helm/values-prod-encrypted.yaml | werf helm secret decrypt -o .helm/values-prod-decrypted.yaml

# зашифровать
cat .helm/values-prod-decrypted.yaml | werf helm secret encrypt -o .helm/values-prod-encrypted.yaml

```