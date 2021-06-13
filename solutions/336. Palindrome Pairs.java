class Solution {
   // TC: O(n * (word.lenth ^ 2)) nearly
    public List<List<Integer>> palindromePairs(String[] words) {
        List<List<Integer>> res = new ArrayList<List<Integer>>();
        Map<String, Integer> map = new HashMap<String, Integer>();
​
        for (int i = 0; i < words.length; ++i) {
            map.put(words[i], i);
        }
​
        // Blank string | add by default all palindromes
        if (map.containsKey("")) {
            int blankIdx = map.get("");
            for (int i = 0; i < words.length; ++i) {
                if (i != blankIdx && isPalindrome(words[i])) {
                    res.add(Arrays.asList(blankIdx, i));
                    res.add(Arrays.asList(i, blankIdx));
                }
            }
        }
​
        // alike: aab | baa presents
        for (int i = 0; i < words.length; ++i) {
            String reversed = new StringBuilder(words[i]).reverse().toString();
            Integer reversedIdx = map.get(reversed);
            if (reversedIdx != null && reversedIdx != i) {
                res.add(Arrays.asList(i, reversedIdx));
            }
        }
​
        // 1 TC
        for (int i = 0; i < words.length; ++i) {
            String cur = words[i];
            for (int cut = 1; cut < cur.length(); ++cut) {
                String left = cur.substring(0, cut);
                String right = cur.substring(cut);
                if (isPalindrome(left)) {
