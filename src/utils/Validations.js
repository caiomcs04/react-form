export const cpfValidation = (strCPF) => {
	if (strCPF.length === 14) {
		if (strCPF !== undefined) {
			strCPF = strCPF
				.replace(".", "")
				.replace(".", "")
				.replace("-", "");

			var Soma;
			var Resto;
			Soma = 0;
			if (strCPF === "00000000000") {
				return { valid: false, errorMsg: "CPF inválido" }
			}

			for (var i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
			Resto = (Soma * 10) % 11;

			if ((Resto === 10) || (Resto === 11)) Resto = 0;
			if (Resto !== parseInt(strCPF.substring(9, 10))) {
				return { valid: false, errorMsg: "CPF inválido" }
			}

			Soma = 0;
			for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
			Resto = (Soma * 10) % 11;

			if ((Resto === 10) || (Resto === 11)) Resto = 0;
			if (Resto !== parseInt(strCPF.substring(10, 11))) {
				return { valid: false, errorMsg: "CPF inválido" }
			}
			return { valid: true, errorMsg: "" };
		}
	} else {
		return { valid: false, errorMsg: "CPF precisa ter 11 dígitos" }
	}
};

export const passwordValidation = (password) => {
	if (password.length < 4) {
		return { valid: false, errorMsg: "A senha precisa ter pelo menos 4 dígitos" }
	}
	return { valid: true, errorMsg: "" }
}

export const nameValidation = (name) => {
	let acceptableCharacter = "qwertyuiopasdfghjklçzxcvbnméáíóúâêîôûãõ"
	let check = true;
	name = name.toLowerCase()
	for (let i = 0; i < name.length; i++) {
		for (let j = 0; j < acceptableCharacter.length; j++) {
			if (acceptableCharacter[j] === name[i]) {
				check = true
				break;
			}
			check = false
		}
		if (!check) {
			break;
		}
	}
	if (!check) {
		return { value: name, valid: false, errorMsg: "Caracter inválido para nome" }
	}

	name = name.substring(0, 1).toUpperCase() + name.substring(1)
	
	return { value: name, valid: true, errorMsg: "" }
}
