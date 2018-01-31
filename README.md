Install Yarn
===


  The easiest way of installing a nightly build is via our shell script:

```shell
curl -o- -L https://yarnpkg.com/install.sh | bash -s -- --nightly
```


An Ubuntu/Debian repository of the nightly builds is also available. To enable it, run the following commands:

```shell
sudo apt-key adv --fetch-keys http://dl.yarnpkg.com/debian/pubkey.gpg
echo "deb http://nightly.yarnpkg.com/debian/ nightly main" | sudo tee /etc/apt/sources.list.d/yarn-nightly.list
sudo apt-get update && sudo apt-get install yarn
```

 How to installation reference to  [https://yarnpkg.com/en/docs/nightly](https://yarnpkg.com/en/docs/nightly).