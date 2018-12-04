(* ::Package:: *)

(* Created with the Wolfram Language : www.wolfram.com *)


<|
	Filter -> <|
		Exclude -> {"yarn.lock", "*.git", "package.json"},
		Include -> {},
		Documentation -> {"Documentation/*"}
	|>,
	Release -> <|
		Local -> <|
			Path-> " "
			AutoVersion -> False,
			BuildNumber -> True,
			Hash -> True
		|>,
		Github -> <|
			Repo -> "",
			AutoVersion -> True,
			PreRelease -> True,
			GithubKey -> "$GITHUB_TOKEN"
		|>
	|>
|>
