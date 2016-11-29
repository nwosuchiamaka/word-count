function words(words) {

	words = words.replace("\n", " ");
	words = words.replace("\t", " ");
	words = words.replace("  ", " ");

	var result = {};

	var words = words.split(" ");
	var shortWord = '';
	for (var i = words.length - 1; i >= 0; i--) {
		shortWord = words[i].trim();
		if(result.hasOwnProperty(shortWord)){
			result[shortWord] += 1;
		}else{
			result[shortWord] = 1;
		}
		
	}
	return result;
}

module.exports = words;
