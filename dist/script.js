const MbtiModule = (function() {
	let types = {
		ISTJ: {title: "The Traditionalist", percentage: "13.7%", description: "Dutiful, Practical, Logical, Methodical", site: "https://pdfhost.io/v/s66tHdTvX_ISTJ.pdf"},
		ISFJ: {title: "The Protector", percentage: "12.7%", description: "Dutiful, Practical, Supportive, Meticulous", site: "https://pdfhost.io/v/Z77jRAHcM_ISFJ.pdf"},
		INFJ: {title: "The Guide", percentage: "1.7%", description: "Devoted, Innovative, Idealistic, Compassionate", site: "https://pdfhost.io/v/amMJPL0gr_INFJ.pdf"},
		INTJ: {title: "The Visionary", percentage: "1.4%", description: "Independent, Innovative, Analytical, Purposeful", site: "https://pdfhost.io/v/fYRsuh~xL_INTJ.pdf"},
		ISTP: {title: "The Problem-Solver", percentage: "6.4%", description: "Expedient, Practical, Objective, Adaptable", site: "https://pdfhost.io/v/oFynza2kQ_ISTP.pdf"},
		ISFP: {title: "The Harmonizer", percentage: "6.1%", description: "Tolerant, Realistic, Harmonious, Adaptable", site: "https://pdfhost.io/v/BbulTiyHi_ISFP.pdf"},
		INFP: {title: "The Humanist", percentage: "3.2%", description: "Insightful, Innovative, Idealistic, Adaptable", site: "https://pdfhost.io/v/l~df9DFHS_INFP.pdf"},
		INTP: {title: "The Conceptualizer", percentage: "2.4%", description: "Questioning, Innovative, Objective, Abstract", site: "https://pdfhost.io/v/De232lcDM_INTP.pdf"},
		ESTP: {title: "The Activist", percentage: "5.8%", description: "Energetic, Practical, Pragmatic, Spontaneous", site: "https://pdfhost.io/v/54gFdt4sW_ESTP.pdf"},
		ESFP: {title: "The Fun-Lover", percentage: "8.7%", description: "Spontaneous, Practical, Friendly, Harmonious", site: "https://pdfhost.io/v/gbG6ploTD_ESFP.pdf"},
		ENFP: {title: "The Enthusiast", percentage: "6.3%", description: "Optimistic, Innovative, Compassionate, Versatile", site: "https://pdfhost.io/v/2G88VUtOi_ENFP.pdf"},
		ENTP: {title: "The Entrepreneur", percentage: "2.8%", description: "Risk-Taking, Innovative, Outgoing, Adaptable", site: "https://pdfhost.io/v/TCB1Y1F9o_Print.pdf"},
		ESTJ: {title: "The Coordinator", percentage: "10.4%", description: "Organized, Practical, Logical, Outgoing", site: "https://pdfhost.io/v/16k~9IXsS_ESTJ.pdf"},
		ESFJ: {title: "The Supporter", percentage: "12.6%", description: "Friendly, Practical, Loyal, Organized", site: "https://pdfhost.io/v/73fjohs3G_ESFJ.pdf"},
		ENFJ: {title: "The Developer", percentage: "2.8%", description: "Friendly, Innovative, Supportive, Idealistic", site: "https://pdfhost.io/v/LL93Fwc5z_ENFJ.pdf"},
		ENTJ: {title: "The Reformer", percentage: "2.9%", description: "Determined, Innovative, Strategic, Outgoing", site: "https://pdfhost.io/v/cneAY1hFU_ENTJ.pdf"}
	};
	let e, i, s, n, t, f, j, p;
	let type;
	
	function resetScores() {
		e = i = s = n = t = f = j = p = 0;
		type = "";
	}
	
	function getScores() {
		const inputs = document.getElementsByTagName("input");
		Array.prototype.forEach.call(inputs, function(input) {
			if (input.checked) {
				switch(input.value) {
					case 'e': e++; break;
					case 'i': i++; break;
					case 's': s++; break;
					case 'n': n++; break;
					case 't': t++; break;
					case 'f': f++; break;
					case 'j': j++; break;
					case 'p': p++; break;
				}
			}
		});
	}
	
	function calculatePercentages() {
		e = Math.floor(e / 12 * 100);
		i = Math.floor(i / 12 * 100);
		s = Math.floor(s / 11 * 100);
		n = Math.floor(n / 11 * 100);
		t = Math.floor(t / 13 * 100);
		f = Math.floor(f / 13 * 100);
		j = Math.floor(j / 14 * 100);
		p = Math.floor(p / 14 * 100);
	}
	
	function createCharts() {
		document.querySelector("#eScore").innerHTML = e;
		document.querySelector("#iScore").innerHTML = i;
		document.querySelector("#sScore").innerHTML = s;
		document.querySelector("#nScore").innerHTML = n;
		document.querySelector("#tScore").innerHTML = t;
		document.querySelector("#fScore").innerHTML = f;
		document.querySelector("#jScore").innerHTML = j;
		document.querySelector("#pScore").innerHTML = p;
		
		document.querySelector("#eiChart").style.marginLeft = i / 2 + "%";
		document.querySelector("#snChart").style.marginLeft = n / 2 + "%";
		document.querySelector("#tfChart").style.marginLeft = f / 2 + "%";
		document.querySelector("#jpChart").style.marginLeft = p / 2 + "%";
	}
	
	function showResults() {
		type += (e >= i) ? "E" : "I";
		type += (s >= n) ? "S" : "N";
		type += (t >= f) ? "T" : "F";
		type += (j >= p) ? "J" : "P";
		//document.querySelector("#type").innerHTML = type;
		//document.querySelector("#type-title").innerHTML = types[type].title;
		//document.querySelector("#type-percentage").innerHTML = types[type].percentage;
		//document.querySelector("#type-description").innerHTML = types[type].description;
		document.querySelector("#type-site").href = types[type].site;
		document.querySelector("#type-details").classList.remove("hidden");
		document.querySelector("#scroll-down").classList.remove("hidden");
		document.querySelector("#results").classList.remove("hidden");
	}
	
	return {
		processForm: function() {
			resetScores();
			getScores();
			calculatePercentages();
			//createCharts();
			showResults();
		}
	};
})();

document.querySelector("#submit").addEventListener("click", function() { MbtiModule.processForm(); });