import { NFTStorage, File } from 'nft.storage'
const client = new NFTStorage({ token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDNhRjdhQkU5QkQzRkYwMjFCNjEzQjgwOTJBOTYwN2REMEIyMzQ4OUEiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY0MjE4NzA0ODgwNywibmFtZSI6ImRvcGlvMSJ9.xZavvnxVNIQH8ji3-L99kFbYbc2_8VEiZA0TlMopJ_Y' })
const punkvar = '0001'

async function main() {
  const metadata = await client.store({
    name: 'CryptoDop',
    punkid: punkvar,
    description: 'Crypto Dops are user made editions of Crypto Punks.',
    image: new File(
      [
        /* data */
      ],
      'index.jpg',
      { type: 'image/jpg' }
    ),
  })
  console.log(metadata.url)
  // ipfs://bafyreib4pff766vhpbxbhjbqqnsh5emeznvujayjj4z2iu533cprgbz23m/metadata.json
}

main()

