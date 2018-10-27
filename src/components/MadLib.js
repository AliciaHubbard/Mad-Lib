import React, { Component } from "react";
//import axios from 'axios';

var madLibs =[
	{
	    "value": [
	        "<p>Hello, ",
	        "</p>"
	    ],
	    "blanks": [
	        "noun"
	    ]
	},

	{
		"value": [
			"<p>Once up a time, there were three ",
			" pigs. One day, their mother said, \"You are all grown up and must ",
			" on your own.\" So they left to ",
			" their houses. The first little pig wanted only to ",
			" all day and quickly built his house out of ",
			". The second little pig wanted to ",
			" and ",
			" all day so he ",
			" his house with ",
			". The third ",
			" pig knew the wolf lived nearby and worked hard to ",
			" his house out of ",
			". One day, the wolf knocked on the first pig's ",
			". \"Let me in or I'll ",
			" your house down!\" The pig didn't, so the wolf ",
			" down the ",
			". The wolf knocked on the second pig's ",
			". \"Let me in or I'll blow your ",
			" down!\" The pig didn't, so the wolf ",
			" down the house. Then the wolf knocked on the third ",
			" pig's door. \"Let me in or I'll blow your house down!\" The little pig didn't so the wolf ",
			" and ",
			". He could not blow the house down. All the pigs went to live in the ",
			" house and they all ",
			" happily ever after.</p>"
		],
		"blanks": [
			"adjective",
			"verb",
			"verb",
			"verb",
			"plural noun",
			"verb",
			"verb",
			"past tense verb",
			"plural noun",
			"adjective",
			"verb",
			"plural noun",
			"noun",
			"verb",
			"past tense verb",
			"noun",
			"noun",
			"noun",
			"past tense verb",
			"adjective",
			"past tense verb",
			"past tense verb",
			"noun",
			"past tense verb"
		]
	},

	{
	    "title": "Talk Like a Pirate",
	    "value": [
	        "<p>Ye can always pretend to be a bloodthirsty ",
	        ", threatening everyone by waving yer ",
	        " sword in the air, but until ye learn to ",
	        " like a pirate, ye'll never be ",
	        " accepted as an authentic ",
	        ". So here's what ye do: Cleverly work into yer daily conversations ",
	        " pirate phrases such as \"Ahoy there, ",
	        ",\"\"Avast, ye ",
	        ",\" and \"Shiver me ",
	        ".\" Remember to drop all yer gs when ye say such words as sailin', spittin', and fightin'. This will give ye a/an ",
	        " start to being recognized as a swashbucklin' ",
	        ". Once ye have the lingo down pat, it helps to wear a three-cornered ",
	        " on yer head, stash a/an ",
	        " in yer pants, and keep a/an ",
	        " perched atop yer ",
	        ". Aye, now ye be a real pirate!</p>",
	        0
	    ],
	    "blanks": [
	        "noun",
	        "adjective",
	        "verb",
	        "adverb",
	        "noun",
	        "adjective",
	        "plural noun",
	        "plural noun",
	        "plural noun",
	        "part of the body",
	        "noun",
	        "noun",
	        "noun",
	        "noun",
	        "part of the body"
	    ]
	},
	{
		"value":[
			"<p>Episode IV</p><p>A New ",
			" </p><p>It is a period of civil war. ",
			" spaceships, striking from a ",
			" base, have won their first victory against the evil Galactic ",
			". </p>During the battle, Rebel ",
			" managed to steal secret plans to the Empire's ultimate weapon, the DEATH ",
			", an armored space station with enough ",
			" to destroy an entire planet.</p><p>Pursued by the Empire's ",
			" agents, Princess Leia races home aboard her ",
			", custodian of the stolen plans that can save her people and restore ",
 			" to the galaxy....</p>",
			0
		],
		"blanks": [
			"noun",
			"adjective",
			"adjective",
			"noun",
			"plural noun",
			"noun",
			"noun",
			"adjective",
			"noun",
			"noun"
		]
	},
	{
		"value": [
			"<p>When ",
			" to your relatives in ",
			" town or to your english teacher, it's ",
			" to make your e-mail as simple and ",
			" as possible. </p>Here are the following tips for writing the perfect e-mail :</p><p>Make sure that you don't write in all capital ",
			" it will sound like you're ",
			". It's important to ",
			" your words correctly. otherwise, people will think you are",
			" and that you don't take enough time to ",
			" drown your e-mails before you send them. Write to someone as if you're actually ",
			" to them. It's very ",
			"to write in incomplete",
			" and use the wrong ",
			". Try to get to the point of your e-mail as ",
			" as possible. Since many people don't even have the time anymore to sit down and eat ",
			" with their families, be as ",
			" with your e-mails as possible.</p>",
			0
		],
		"blanks": [
			"verb ending in 'ing'",
			"proper noun",
			"adjective",
			"adjective",
			"proper noun",
			"verb ending in 'ing'",
			"verb",
			"adjective",
			"verb",
			"verb ending in 'ing'",
			"adjective",
			"proper noun",
			"proper noun",
			"adverb",
			"type of food (plural)",
			"adjective",
		]
	}
]

class MadLib extends Component{

	constructor(props) {
        super(props);
        this.state = {
          madLib: {},
		  showMadLib: false,
        }
        this.fetchMadLib = this.fetchMadLib.bind(this);
		this.makeMadLib = this.makeMadLib.bind(this);
		this.resetState = this.resetState.bind(this);
    }

    componentDidMount() {
        this.fetchMadLib();
    }

    fetchMadLib() {
		var randIndex = Math.floor(Math.random() * (Object.keys(madLibs).length - 0) + 0);

		while(randIndex === this.state.madLibId){
			randIndex = Math.floor(Math.random() * (Object.keys(madLibs).length - 0) + 0);
		}
		this.setState({
			madLib: madLibs[randIndex],
			madLibId: randIndex
		});

        // axios.get("http://madlibz.herokuapp.com/api/random").then(res => {
        //     this.setState({
        //         madLib: res.data
        //     });
        // });
    }

	componentWillReceiveProps(nextProps) {
		this.setState({
			showMadLib: false,
		});
	}

	makeMadLib() {
		//this.state.madLibTemplate = this.props.madLibTemplate;
		this.setState({
			showMadLib: true
		});

		var elements = document.getElementById("mad-lib-fields").elements;
		var story = this.state.madLib.value;
		var blankValues = [];
		for (var i = 0, element; element = elements[i++];) {
		    blankValues.push(element.value);
		}

		var madLibFinished = "";
		for (var index = 0, fragment; fragment = story[index];) {
			madLibFinished += fragment + blankValues[index];
			index++;
		}

		this.setState({
			finishedMadLib: madLibFinished,
		})
	}

	makeBlanks(blanksTemplate) {
		var blanks;
		if (blanksTemplate){
			blanks = blanksTemplate.map(function(name, index){
				return <input key={index} placeholder={name}/>;
			})
		}

		else{

		}

		return blanks;
	};

	resetState(){
		this.setState({
			showMadLib: false
		});

		this.fetchMadLib();
	}

	render(){
		return (
			<div className="MadLib">
				{!this.state.showMadLib ? (
					<div className="MadLibInner">
						<p className="App-intro">
							Enter words of the types in the prompts below to read a silly story
						</p>
							<form id="mad-lib-fields">
								<p>{this.makeBlanks(this.state.madLib.blanks)}</p>
								<button className="button" onClick={this.makeMadLib}>Show me the mad lib</button>
							</form>
					</div>
				) : (
					<div className="MadLibInner" id="MadLibInner">
						<div dangerouslySetInnerHTML={{ __html: this.state.finishedMadLib }} />

						<button className="button" onClick={this.resetState}>Do another One!</button>
					</div>
				)}
			</div>
		)
	}
}

export default MadLib;
