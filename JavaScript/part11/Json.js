let apiRes = '{"type": "knock-knock", "setup": "Knock knock. Who\'s there? Cows go. Cows go who?", "punchline": "No, cows go moo.", "id": 12}';
let validRes = JSON.parse(apiRes);
console.log(validRes.setup);
