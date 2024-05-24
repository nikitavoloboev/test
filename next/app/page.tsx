import { auth } from "@/edgedb"
import { graphql } from "gql.tada"
import request from "graphql-request"

const sayHello = graphql(`
	mutation Go {
		go {
			postPostSayHello(input: { name: "Nikita" }) {
				message
			}
		}
	}
`)

const sayHelloAuth = graphql(`
	mutation Go {
		go {
			postPostSayHello(input: { name: "Nikita" }) {
				message
			}
		}
	}
`)

export default async function Home() {
	// const session = auth.getSession()
	// const client = session.client
	// const authenticated = await session.isSignedIn()

	const data = await request("http://127.0.0.1:4000/graphql", sayHello)
	console.log(data, "data")

	// const publicData = ..
	// let authData = null as null
	// if (authenticated) {
	// authData = ..
	// }
	// const session = auth.getSession()
	// const signedIn = await session.isSignedIn()

	return (
		<>
			<div>hello</div>
		</>
	)
}
