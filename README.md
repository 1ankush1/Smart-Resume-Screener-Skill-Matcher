# Smart-Resume-Screener-Skill-Matcher
This Python system speeds up resume screening using a Trie-based Aho-Corasick engine. It loads thousands of skills into one automaton and scans each normalized PDF/DOCX resume in a single linear pass, detecting all matches at once. Skills are weighted against a job description to compute match scores, ranking candidates on an interactive interface.
