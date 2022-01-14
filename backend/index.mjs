import { NFTStorage, File } from 'nft.storage'
import { pack } from 'ipfs-car/pack';

const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDNhRjdhQkU5QkQzRkYwMjFCNjEzQjgwOTJBOTYwN2REMEIyMzQ4OUEiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY0MjE4NzA0ODgwNywibmFtZSI6ImRvcGlvMSJ9.xZavvnxVNIQH8ji3-L99kFbYbc2_8VEiZA0TlMopJ_Y'
const client = new NFTStorage({ token: apiKey })

const metadata = await client.store({
  name: 'test1',
  description: 'testdescription1',
  
})
console.log(metadata.url)
