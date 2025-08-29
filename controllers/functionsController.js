const functionArray = (req, res) => {
    try {
        const { data } = req.body;

        if (!Array.isArray(data)) {
            return res.status(400).json({status: "error", message: "Input must be an array"})
        }

        const numbers = data
            .map(item => (typeof item === "string" && /^\d+$/.test(item)) ? Number(item) : item)
            .filter(item => typeof item === "number");
        const alphabets = data.filter(item => typeof item === "string" && /^[a-zA-Z]$/.test(item))
        const specialChars = data.filter(item => typeof item === "string" && /[^a-zA-Z0-9]/.test(item))

        const evens = numbers.filter(n => n % 2 === 0);
        const odds = numbers.filter(n => n % 2 === 1);

        const sum = numbers.reduce((acc, n) => acc + n, 0);
        const upperAlphabets = alphabets.map(str => str.toUpperCase())

        const concatReverseAltCaps = alphabets
            .reverse()
            .map((ch, idx) =>
            idx % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()
            )
            .join("")
        
        const response = {
            is_success: true,
            user_id: "aditya_sharma_21112003",
            email_id: "aditya.sharma2022b@vitstudent.ac.in",
            roll_number: "22BDS0009",
            even_numbers: evens,
            odd_numbers: odds,
            alphabets: upperAlphabets,
            special_characters: specialChars,
            sum: sum,
            concat_string: concatReverseAltCaps,
        }
        res.status(200).json(response)
    }

    catch (Error) {
        res.status(500).json({status: "error", message: Error.message})
    }
}

export default functionArray
