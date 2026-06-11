# Compono Competitor Hub - Update Prompts

## How updates work
The entire hub reads from one file: `data.js`. To update the hub, Claude rewrites `data.js` and you replace that single file on GitHub. Nothing else changes.

---

## MONTHLY REFRESH PROMPT (copy-paste into Claude)

```
I'm attaching the data.js file from my Compono Competitor Intelligence Hub.

For each competitor in the file, run web searches to find anything from the
last 30 days on:
1. Product releases or new features
2. Brand messaging or positioning changes
3. Partnerships, acquisitions, funding, leadership changes
4. Pricing changes
5. Notable social/brand momentum shifts

Then output an updated data.js where you:
- Add new entries to each competitor's recentActivity array in the format
  { date: "Jun 2026", note: "..." } - newest first, keep a rolling 6 months,
  remove anything older
- Update the social field where momentum has clearly changed
- Update pricing ONLY if you found confirmed changes
- Update LAST_UPDATED to today's date with "(monthly refresh)"
- Leave every other field untouched

Only include activity you found real evidence for. If nothing happened for a
competitor, leave its recentActivity as is. Output the complete data.js file
so I can replace it directly.

Keep all writing in Australian English, hyphens not em dashes, Grade 6
reading level, no exclamation marks.
```

---

## QUARTERLY FULL REFRESH PROMPT

```
I'm attaching the data.js file from my Compono Competitor Intelligence Hub.

Do a full refresh: for each competitor, web search and verify/update every
field - snapshot (HQ, funding, headcount, ANZ presence), target market,
summary, pricing, features, their FAB, social signal, and assessment
capability (Hire competitors only).

Do NOT change the fabOurs, wins, losses or battlecard fields unless something
material changed about the competitor that makes them inaccurate - flag those
suggestions separately for my approval instead of changing them silently.

Apply the same monthly refresh rules to recentActivity. Update LAST_UPDATED
with today's date and "(quarterly full refresh)". Output the complete data.js.

Australian English, hyphens not em dashes, Grade 6 reading level.
```

---

## ADDING A NEW COMPETITOR

```
Add [COMPANY NAME] to my Compono Competitor Hub data.js (attached) in the
[hire/engage/develop/hris] category. Research them and complete every field
in the same schema and writing style as the existing entries, including
honest wins/losses and a battle card seed written from Compono's people
insight risk positioning. Output the complete updated data.js.
```

---

## DEPLOYING UPDATES TO GITHUB
1. Go to your repository on github.com
2. Click `data.js` → pencil icon (Edit)
3. Select all, paste the new version Claude produced
4. Commit changes - the live site updates within a minute or two
