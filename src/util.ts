// convert Uint8Array to  WeierstrassSignatureType
// function parseSignature(data: Uint8Array): WeierstrassSignatureType {
// 	// Define the length of each component in bytes
// 	const rLength = 32; // Length of r in bytes
// 	const sLength = 32; // Length of s in bytes
// 	const recoveryLength = 1; // Length of recovery in bytes

// 	// Extract each component
// 	const rArray = data.slice(0, rLength);
// 	const sArray = data.slice(rLength, rLength + sLength);
// 	const recoveryArray = data.slice(rLength + sLength);

// 	// Convert Uint8Array back to hex strings
// 	const rHex = Buffer.from(rArray).toString("hex");
// 	const sHex = Buffer.from(sArray).toString("hex");
// 	const recoveryHex = Buffer.from(recoveryArray).toString("hex");

// 	// Convert hex strings to BigInt and number
// 	const r = BigInt("0x" + rHex);
// 	const s = BigInt("0x" + sHex);
// 	const recovery = parseInt(recoveryHex, 16);

// 	return { r, s, recovery } as WeierstrassSignatureType;
//   }