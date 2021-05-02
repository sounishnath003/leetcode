export interface SolutionInterface {
  ID: number;
  Name: string;
  Content: string;
}

export const solutions: SolutionInterface[] = [
  {
    ID: 1,
    Name: "1. Two Sum.java",
    Content:
      'class Solution {\r\n    public int[] twoSum(int[] nums, int target) {\r\n    Map\u003cInteger, Integer\u003e map = new HashMap\u003c\u003e();\r\n    for (int i = 0; i \u003c nums.length; i++) {\r\n        int complement = target - nums[i];\r\n        if (map.containsKey(complement)) {\r\n            return new int[] { map.get(complement), i };\r\n        }\r\n        map.put(nums[i], i);\r\n    }\r\n    throw new IllegalArgumentException("No two sum solution");\r\n}\r\n}\r\n',
  },
  {
    ID: 2,
    Name: "101. Symmetric Tree.cpp",
    Content:
      "/**\r\n * Definition for a binary tree node.\r\n * struct TreeNode {\r\n *     int val;\r\n *     TreeNode *left;\r\n *     TreeNode *right;\r\n *     TreeNode() : val(0), left(nullptr), right(nullptr) {}\r\n *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\r\n *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\r\n * };\r\n */\r\nclass Solution {\r\npublic:\r\n    bool isSymmetric(TreeNode* root) {\r\n        if(root == NULL){\r\n            return true;\r\n        }\r\n        return f(root-\u003eleft, root-\u003eright);\r\n    }\r\n    bool f(TreeNode* left, TreeNode* right){\r\n        if(left == NULL or right == NULL){\r\n            return left == right;\r\n        }\r\n        if(left-\u003eval != right-\u003eval){\r\n            return false;\r\n        }\r\n        return f(left-\u003eleft, right-\u003eright) \u0026\u0026 f(left-\u003eright, right-\u003eleft);\r\n    }\r\n};\r\n",
  },
  {
    ID: 3,
    Name: "1015. Smallest Integer Divisible by K.cpp",
    Content:
      "class Solution {\r\npublic:\r\n    int smallestRepunitDivByK(int k) {\r\n         if(k%2 == 0 || k%5 == 0)\r\n        {\r\n            return -1;\r\n        }\r\n​\r\n        int prevRem = 0;\r\n        for(int i = 1; i \u003c=k; i++)\r\n        {\r\n            prevRem = (prevRem*10+1)%k;\r\n            if(prevRem==0)\r\n            {\r\n                return i;\r\n            }\r\n        }\r\n        return -1; \r\n    }\r\n};\r\n",
  },
  {
    ID: 4,
    Name: "102. Binary Tree Level Order Traversal.js",
    Content:
      "/**\r\n * Definition for a binary tree node.\r\n * function TreeNode(val, left, right) {\r\n *     this.val = (val===undefined ? 0 : val)\r\n *     this.left = (left===undefined ? null : left)\r\n *     this.right = (right===undefined ? null : right)\r\n * }\r\n */\r\n/**\r\n * @param {TreeNode} root\r\n * @return {number[][]}\r\n */\r\nvar levelOrder = function (root) {\r\n  let result = [];\r\n​\r\n   function dfs (root, level) {\r\n        if (!root) return;\r\n​\r\n        dfs(root.left, level + 1);\r\n​\r\n        if (result[level]) {\r\n          result[level].push(root.val);\r\n        } else {\r\n          result[level] = [root.val];\r\n        }\r\n​\r\n        dfs(root.right, level + 1);\r\n    };\r\n      dfs(root, 0);\r\n      return result;\r\n};\r\n​\r\n",
  },
  {
    ID: 5,
    Name: "103. Binary Tree Zigzag Level Order Traversal.js",
    Content:
      "/**\r\n * Definition for a binary tree node.\r\n * function TreeNode(val, left, right) {\r\n *     this.val = (val===undefined ? 0 : val)\r\n *     this.left = (left===undefined ? null : left)\r\n *     this.right = (right===undefined ? null : right)\r\n * }\r\n */\r\n/**\r\n * @param {TreeNode} root\r\n * @return {number[][]}\r\n */\r\nvar zigzagLevelOrder = function(root) {\r\n     let result = [];\r\n​\r\n    const loot = (root, level) =\u003e {\r\n        if(!root) {return ; }\r\n        \r\n        if(result[level]){\r\n            result[level].push(root.val);\r\n        } else {\r\n            result[level] = [root.val] ;\r\n        }\r\n​\r\n        loot(root.left, level+1);\r\n        loot(root.right, level+1);\r\n    } \r\n    loot(root, 0);\r\n​\r\n    results = result.map((arr, index) =\u003e {\r\n        (index%2 === 1) ? arr.reverse() : arr;\r\n    });\r\n​\r\n    return result; \r\n};\r\n",
  },
  {
    ID: 6,
    Name: "104. Maximum Depth of Binary Tree.cpp",
    Content:
      "/**\r\n * Definition for a binary tree node.\r\n * struct TreeNode {\r\n *     int val;\r\n *     TreeNode *left;\r\n *     TreeNode *right;\r\n *     TreeNode() : val(0), left(nullptr), right(nullptr) {}\r\n *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\r\n *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\r\n * };\r\n */\r\nclass Solution {\r\npublic:\r\n    int maxDepth(TreeNode* root) {\r\n        if(root == NULL)   {\r\n            return 0;\r\n        }\r\n        return max( maxDepth(root-\u003eleft), maxDepth(root-\u003eright)) + 1 ;\r\n    }\r\n};\r\n",
  },
  {
    ID: 7,
    Name: "107. Binary Tree Level Order Traversal II.js",
    Content:
      "/**\r\n * Definition for a binary tree node.\r\n * function TreeNode(val, left, right) {\r\n *     this.val = (val===undefined ? 0 : val)\r\n *     this.left = (left===undefined ? null : left)\r\n *     this.right = (right===undefined ? null : right)\r\n * }\r\n */\r\n/**\r\n * @param {TreeNode} root\r\n * @return {number[][]}\r\n */\r\nvar levelOrderBottom = function (root) {\r\n  let result = [];\r\n​\r\n  const dfs = (root, level) =\u003e {\r\n    if (!root) return;\r\n​\r\n    dfs(root.left, level + 1);\r\n​\r\n    if (result[level]) {\r\n      result[level].push(root.val);\r\n    } else {\r\n      result[level] = [root.val];\r\n    }\r\n​\r\n    dfs(root.right, level + 1);\r\n  };\r\n​\r\n  dfs(root, 0);\r\n  return result.reverse();\r\n};\r\n​\r\n",
  },
  {
    ID: 8,
    Name: "108. Convert Sorted Array to Binary Search Tree.cpp",
    Content:
      "/**\r\n * Definition for a binary tree node.\r\n * struct TreeNode {\r\n *     int val;\r\n *     TreeNode *left;\r\n *     TreeNode *right;\r\n *     TreeNode() : val(0), left(nullptr), right(nullptr) {}\r\n *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\r\n *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\r\n * };\r\n */\r\nclass Solution {\r\npublic:\r\n    \r\n    TreeNode* f(vector\u003cint\u003e \u0026nums, int lo, int hi){\r\n        if(lo \u003e hi){\r\n            return nullptr;\r\n        }\r\n        int mid = (lo + hi) \u003e\u003e 1;\r\n        TreeNode* root = new TreeNode(nums[mid]);\r\n        root-\u003eleft = f(nums, lo, mid-1);\r\n        root-\u003eright = f(nums, mid + 1, hi);\r\n        return root;\r\n    }\r\n    \r\n    TreeNode* sortedArrayToBST(vector\u003cint\u003e\u0026 nums) {\r\n       if(nums.empty()){\r\n           return nullptr;\r\n       }\r\n        return f(nums, 0, nums.size() - 1);\r\n    }\r\n};\r\n",
  },
  {
    ID: 9,
    Name: "11. Container With Most Water.cpp",
    Content:
      "class Solution {\r\npublic:\r\n    #define fo(i, k, n) for(int i = k; i \u003c n; i++)\r\n    const int inf = 0x3f3f3f3f;\r\n    \r\n    int maxArea(vector\u003cint\u003e\u0026 nums) {\r\n        \r\n        /*\r\n            O(N*N)solutions:\r\n            \r\n            for(i,0,n){\r\n                for(j,i+1,n){\r\n                    minn = min(height[i], height[j]);\r\n                    maxv = max(maxv, minn*(j-i));\r\n                }\r\n            }\r\n            return maxv;\r\n        */\r\n        \r\n        int n = nums.size();\r\n        int maxv = -1 * inf;\r\n        int i = 0, j = n-1;\r\n        while(i \u003c j) {\r\n            int minn = min(nums[i], nums[j]);\r\n            maxv = max(maxv, minn*(j-i));\r\n            if(nums[i]\u003cnums[j]) {\r\n                i++;\r\n            } else {\r\n                j--;\r\n            }\r\n       }\r\n       return maxv;\r\n    }\r\n};\r\n",
  },
  {
    ID: 10,
    Name: "110. Balanced Binary Tree.js",
    Content:
      "/**\r\n * Definition for a binary tree node.\r\n * function TreeNode(val, left, right) {\r\n *     this.val = (val===undefined ? 0 : val)\r\n *     this.left = (left===undefined ? null : left)\r\n *     this.right = (right===undefined ? null : right)\r\n * }\r\n */\r\n/**\r\n * @param {TreeNode} root\r\n * @return {boolean}\r\n */\r\n​\r\n/*\r\n    Solution 1 - O(N*N) looks\r\n    ---------------------------\r\nvar isBalanced = function(root) {\r\n    if(!root) {\r\n        return true ;\r\n    }\r\n    \r\n    function dfs(root) {\r\n        if (!root) {\r\n            return 0 ;\r\n        }\r\n        return Math.max(dfs(root.left), dfs(root.right)) + 1;\r\n    }\r\n    \r\n    if(Math.abs(dfs(root.left) - dfs(root.right)) \u003e 1) {\r\n        return false;\r\n    }\r\n    \r\n    return isBalanced(root.left) \u0026\u0026 isBalanced(root.right);\r\n};\r\n*/\r\n​\r\nvar isBalanced = function(root) {\r\n    if(!root) {\r\n        return true ;\r\n    }\r\n    \r\n    function dfs(root) {\r\n        if (!root) {\r\n            return 0 ;\r\n        }\r\n        \r\n        leftHeight = dfs(root.left);\r\n        rightHeight = dfs(root.right);\r\n        balanceFactor = Math.abs (leftHeight - rightHeight);\r\n        \r\n        if (balanceFactor \u003e 1 || leftHeight == -1 || rightHeight == -1) {return -1;}\r\n        \r\n        return 1 + Math.max(leftHeight, rightHeight) ;\r\n    }\r\n    \r\n   return dfs(root) != -1;\r\n};\r\n",
  },
  {
    ID: 11,
    Name: "1123. Lowest Common Ancestor of Deepest Leaves.cpp",
    Content:
      "/**\r\n * Definition for a binary tree node.\r\n * struct TreeNode {\r\n *     int val;\r\n *     TreeNode *left;\r\n *     TreeNode *right;\r\n *     TreeNode() : val(0), left(nullptr), right(nullptr) {}\r\n *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\r\n *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\r\n * };\r\n */\r\nclass Solution {\r\npublic:\r\n    TreeNode* answer = nullptr; \r\n    int maxDepthNode = -1;\r\n    TreeNode* lcaDeepestLeaves(TreeNode* root) {\r\n        TreeNode *tmp = root ;\r\n        dfs(tmp,0);\r\n        return answer ;\r\n    }\r\n    \r\n    int dfs(TreeNode* root, int curDepth) {\r\n        if(!root) {\r\n            return curDepth;\r\n        }\r\n        int leftside = dfs(root-\u003eleft, curDepth+1);\r\n        int rightside = dfs(root-\u003eright, curDepth+1);\r\n​\r\n        if(leftside == rightside) {\r\n            maxDepthNode = max(maxDepthNode, leftside);\r\n            if(maxDepthNode == leftside) {\r\n                answer = root;\r\n            }\r\n        }\r\n​\r\n        return max(leftside, rightside) ;\r\n    }\r\n​\r\n};\r\n",
  },
  {
    ID: 12,
    Name: "118. Pascal's Triangle.cpp",
    Content:
      'class Solution {\r\npublic:\r\n    vector\u003cvector\u003cint\u003e\u003e generate(int numRows) {\r\n        vector\u003cvector\u003cint\u003e\u003e ans;\r\n        \r\n        for(int row = 0 ; row \u003c numRows; row++) \r\n        { \r\n            vector\u003cint\u003e t;\r\n            for(int space = 0; space \u003c (numRows - row); space++)\r\n            { \r\n                // cout \u003c\u003c " " ; \r\n            \r\n            } \r\n            int n = 1 ; \r\n            for(int col = 0; col \u003c= row; col++)\r\n            { \r\n                t.push_back(n); \r\n                n = n * (row - col) / (col + 1) ;\r\n            } \r\n            ans.push_back(t);\r\n        }\r\n        return ans;\r\n    }\r\n};\r\n',
  },
  {
    ID: 13,
    Name: "121. Best Time to Buy and Sell Stock.cpp",
    Content:
      "class Solution {\r\npublic:\r\n    int maxProfit(vector\u003cint\u003e\u0026 prices) {\r\n        int ans = 0, minimal = 2e9+81;\r\n        for(auto \u0026\u0026 x : prices){\r\n            minimal = min(x, minimal);\r\n            ans = max(ans, x - minimal);\r\n        }\r\n        return ans;\r\n    }\r\n};\r\n",
  },
  {
    ID: 14,
    Name: "122. Best Time to Buy and Sell Stock II.cpp",
    Content:
      "class Solution {\r\npublic:\r\n    int maxProfit(vector\u003cint\u003e\u0026 prices) {\r\n        if (prices.size() == 0)\r\n            return 0;\r\n​\r\n        int sum = 0, prev = 0;\r\n        for (int i = 0; i \u003c prices.size(); i++)\r\n        {\r\n            if (i == prices.size() - 1)\r\n            {\r\n                sum += prices[i] - prices[prev];\r\n            }\r\n​\r\n            else if (prices[i] \u003e prices[i + 1])\r\n            {\r\n                sum += prices[i] - prices[prev];\r\n                prev = i + 1;\r\n            }\r\n        }\r\n​\r\n        return sum;\r\n    }\r\n};\r\n",
  },
  {
    ID: 15,
    Name: "125. Valid Palindrome.py",
    Content:
      "class Solution:\r\n    def isPalindrome(self, s: str) -\u003e bool:\r\n        punc = '''!()-[]{};`:'\"\\, \u003c\u003e./?@#$%^\u0026*_~'''\r\n        s = s.lower()\r\n        s.replace(\" \", '')\r\n        for x in s:\r\n            if x in punc:\r\n                s = s.replace(x, \"\")\r\n        return s[::-1] == s\r\n",
  },
  {
    ID: 16,
    Name: "13. Roman to Integer.cpp",
    Content:
      "class Solution {\r\npublic:\r\n    int value(char r)\r\n{\r\n    if (r == 'I')\r\n        return 1;\r\n    if (r == 'V')\r\n        return 5;\r\n    if (r == 'X')\r\n        return 10;\r\n    if (r == 'L')\r\n        return 50;\r\n    if (r == 'C')\r\n        return 100;\r\n    if (r == 'D')\r\n        return 500;\r\n    if (r == 'M')\r\n        return 1000;\r\n \r\n    return -1;\r\n}\r\n    int romanToInt(string str) {\r\n        // Initialize result\r\n    int res = 0;\r\n \r\n    // Traverse given input\r\n    for (int i = 0; i \u003c str.length(); i++) \r\n    {\r\n        // Getting value of symbol s[i]\r\n        int s1 = value(str[i]);\r\n \r\n        if (i + 1 \u003c str.length()) \r\n        {\r\n            // Getting value of symbol s[i+1]\r\n            int s2 = value(str[i + 1]);\r\n \r\n            // Comparing both values\r\n            if (s1 \u003e= s2) \r\n            {\r\n                // Value of current symbol\r\n                // is greater or equal to\r\n                // the next symbol\r\n                res = res + s1;\r\n            }\r\n            else\r\n            {\r\n                // Value of current symbol is\r\n                // less than the next symbol\r\n                res = res + s2 - s1;\r\n                i++;\r\n            }\r\n        }\r\n        else {\r\n            res = res + s1;\r\n        }\r\n    }\r\n    return res;\r\n    }\r\n};\r\n",
  },
  {
    ID: 17,
    Name: "1306. Jump Game III.cpp",
    Content:
      "class Solution {\r\n    vector\u003cbool\u003e visited;\r\n    public:\r\n    bool canReach(vector\u003cint\u003e\u0026 nums, int start) {\r\n        int n = nums.size();\r\n        visited.resize(n+2);\r\n        queue\u003cint\u003e q;\r\n        \r\n        q.push(start);\r\n        \r\n        while(!q.empty()) {\r\n            start = q.front();\r\n            q.pop();\r\n            \r\n            // go start - nums[start]\r\n            {if(start - nums[start] \u003e= 0 \u0026\u0026 !visited[start]) {\r\n                if(start - nums[start] == 0 || nums[start] == 0) {\r\n                    return true;\r\n                }else if(start - nums[start] \u003e 0) {\r\n                    visited[start] = true;\r\n                    q.push(start-nums[start]);\r\n                }\r\n            }else {continue;}}\r\n            // go start + nums[start]\r\n            {\r\n                if(start + nums[start] \u003c (int) nums.size()  \u0026\u0026 !visited[start]) {\r\n                if(start + nums[start] == 0 || nums[start] == 0 ) {\r\n                    return true;\r\n                }else if (start - nums[start] \u003e 0) {\r\n                    visited[start] = true;\r\n                    q.push(start+nums[start]);\r\n                }\r\n            }else {continue;}\r\n            }\r\n        }\r\n        return false;\r\n    \r\n        // bool ans = dfs(nums, start);\r\n        // return ans;\r\n    }\r\n​\r\n    bool dfs(vector\u003cint\u003e \u0026nums, int start) {\r\n        if(start \u003c 0 || start \u003e= (int) nums.size() || visited[start]) {\r\n            return false;\r\n        }\r\n        visited[start] = true;\r\n        if(nums[start] == 0){\r\n            return true;\r\n        }\r\n        bool ans1 = dfs(nums, start + nums[start]);\r\n        bool ans2 = dfs(nums, start - nums[start]);\r\n        return ans1 || ans2;\r\n    }\r\n};\r\n",
  },
  {
    ID: 18,
    Name: "1329. Sort the Matrix Diagonally.cpp",
    Content:
      "class Solution {\r\n    int R, C;\r\npublic:\r\n    void sort(vector\u003cvector\u003cint\u003e\u003e \u0026mat, int row, int col) {\r\n        vector\u003cint\u003e temp;\r\n        int r = row, c = col;\r\n        while(r \u003c R \u0026\u0026 c \u003c C) {\r\n            temp.push_back(mat[r++][c++]);\r\n        }\r\n        std::sort(temp.rbegin(), temp.rend());\r\n        r = row, c = col;\r\n        while (r \u003c R \u0026\u0026 c \u003c C) {\r\n            mat[r++][c++] = temp.back();\r\n            temp.pop_back();\r\n        }\r\n    }\r\n    vector\u003cvector\u003cint\u003e\u003e diagonalSort(vector\u003cvector\u003cint\u003e\u003e\u0026 mat) {\r\n        if(mat.empty()){\r\n            return {{}};\r\n        }\r\n        R = mat.size();\r\n        C = mat[0].size();\r\n        for (int col = 0; col \u003c C; col++) {\r\n            sort(mat,0,col);\r\n        }\r\n        for (int row = 1; row \u003c R; row++) {\r\n            sort(mat,row,0);\r\n        }\r\n        return mat;\r\n    }\r\n};\r\n",
  },
  {
    ID: 19,
    Name: "136. Single Number.cpp",
    Content:
      "class Solution {\r\npublic:\r\n    int singleNumber(vector\u003cint\u003e\u0026 nums) {\r\n        int xr = 0;\r\n        for(auto \u0026\u0026 x : nums ){\r\n            xr = xr ^ x;\r\n        }\r\n        return xr;\r\n    }\r\n};\r\n",
  },
  {
    ID: 20,
    Name: "137. Single Number II.cpp",
    Content:
      "class Solution {\r\npublic:\r\n    int singleNumber(vector\u003cint\u003e\u0026 nums) {\r\n        // map\u003cint, int\u003e cache;\r\n        // for(auto \u0026\u0026x : nums){cache[x]++ ;}\r\n        // for(auto \u0026\u0026p : cache) {\r\n        //     if(p.second == 1){\r\n        //         return p.first;\r\n        //     }\r\n        // }\r\n        // return -1;\r\n        \r\n        int seen1 = 0,seen2 = 0;\r\n        for(auto \u0026\u0026x : nums) {\r\n            seen1 = ~seen2 \u0026 (seen1 ^ x);\r\n            seen2 = ~seen1 \u0026 (seen2 ^ x);\r\n        }\r\n        return seen1;\r\n    }\r\n};\r\n",
  },
  {
    ID: 21,
    Name: "138. Copy List with Random Pointer.cpp",
    Content:
      "/*\r\n// Definition for a Node.\r\nclass Node {\r\npublic:\r\n    int val;\r\n    Node* next;\r\n    Node* random;\r\n    \r\n    Node(int _val) {\r\n        val = _val;\r\n        next = NULL;\r\n        random = NULL;\r\n    }\r\n};\r\n*/\r\n​\r\nclass Solution {\r\npublic:\r\n   Node* copyRandomList(Node* head) {\r\n   unordered_map\u003cNode*, Node*\u003e cache;\r\n    Node* r = head;\r\n    while(r) {\r\n        cache[r] = new Node(r-\u003eval);\r\n        r = r-\u003enext ;\r\n    }\r\n    r = head;\r\n    while(r){\r\n        cache[r]-\u003enext = cache[r-\u003enext];\r\n        cache[r]-\u003erandom = cache[r-\u003erandom];\r\n        r = r -\u003e next;\r\n    }\r\n    return cache[head];\r\n    }\r\n};\r\n",
  },
  {
    ID: 22,
    Name: "14. Longest Common Prefix.cpp",
    Content:
      'class Solution {\r\npublic:\r\n    string longestCommonPrefix(vector\u003cstring\u003e\u0026 strs) {\r\n        if(strs.size() == 0)   {\r\n            return "";\r\n        }\r\n        string prefix = strs[0];\r\n        for(int i = 1; i \u003c (int) strs.size(); i++){\r\n            while(strs[i].find_first_of(prefix) == string::npos){\r\n                prefix = string(prefix.substr(0, prefix.length() - 1));\r\n            }\r\n        }\r\n        return prefix;\r\n    }\r\n};\r\n',
  },
  {
    ID: 23,
    Name: "141. Linked List Cycle.cpp",
    Content:
      "/**\r\n * Definition for singly-linked list.\r\n * struct ListNode {\r\n *     int val;\r\n *     ListNode *next;\r\n *     ListNode(int x) : val(x), next(NULL) {}\r\n * };\r\n */\r\nclass Solution {\r\npublic:\r\n    bool hasCycle(ListNode *head) {\r\n        set\u003cListNode*\u003e cache ;\r\n        while(head){\r\n            if(cache.count(head)){\r\n                return true;\r\n            }\r\n            cache.insert(head);\r\n            head = head-\u003e next;\r\n        }\r\n        return false;\r\n    }\r\n};\r\n",
  },
  {
    ID: 24,
    Name: "1437. Check If All 1's Are at Least Length K Places Away.cpp",
    Content:
      "class Solution {\r\npublic:\r\n    bool kLengthApart(vector\u003cint\u003e\u0026 nums, int k) {\r\n        if(nums.empty()) { return false; }\r\n        int oneIndex = -1; bool assume=true;\r\n        for(int i = 0; i \u003c nums.size(); i++) {\r\n            int one = nums[i];\r\n            if(one==1){\r\n                if(oneIndex==-1)\r\n                    oneIndex=i;\r\n                else {\r\n                    int dist = i - oneIndex - 1 ;\r\n                    if(dist \u003c k) {\r\n                        assume = false;\r\n                        break;\r\n                    }\r\n                    oneIndex=i;\r\n                }\r\n            }\r\n        }\r\n        return assume;\r\n    }\r\n};\r\n",
  },
  {
    ID: 25,
    Name: "1457. Pseudo-Palindromic Paths in a Binary Tree.cpp",
    Content:
      "/**\r\n * Definition for a binary tree node.\r\n * struct TreeNode {\r\n *     int val;\r\n *     TreeNode *left;\r\n *     TreeNode *right;\r\n *     TreeNode() : val(0), left(nullptr), right(nullptr) {}\r\n *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\r\n *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\r\n * };\r\n */\r\nclass Solution {\r\n    int cache[10];\r\n    int answer = 0;\r\npublic:\r\n    int pseudoPalindromicPaths (TreeNode* root) {\r\n        dfs (root);\r\n        return answer ;\r\n    }\r\n    \r\n    void dfs(TreeNode* root) {\r\n        if (root==nullptr) {\r\n            return ;\r\n        }\r\n        cache[root-\u003eval]++;\r\n        if (!root-\u003eleft \u0026\u0026 !root-\u003eright) {\r\n            if (isPaindome()) {\r\n                answer++;\r\n            }\r\n        }else {\r\n            dfs(root-\u003eleft);\r\n            dfs(root-\u003eright);\r\n        }\r\n        cache[root-\u003eval]-- ;\r\n    }\r\n​\r\n    bool isPaindome() {\r\n        int oddparity = 0;\r\n        for (int i = 1 ; i \u003c= 9; i++) {\r\n            int x = cache[i];\r\n            if(x\u00261){\r\n                oddparity++;\r\n            }\r\n        }\r\n        return oddparity \u003c 2 ;\r\n    }\r\n​\r\n​\r\n};\r\n",
  },
  {
    ID: 26,
    Name: "150. Evaluate Reverse Polish Notation.java",
    Content:
      'class Solution {\r\n    public int evalRPN(String[] tokens) {\r\n        \r\n        int returnValue = 0;\r\n \r\n        String operators = "+-*/";\r\n \r\n        Stack\u003cString\u003e stack = new Stack\u003cString\u003e();\r\n \r\n        for(String t : tokens){\r\n            if(!operators.contains(t)){\r\n                stack.push(t);\r\n            }else{\r\n                int a = Integer.valueOf(stack.pop());\r\n                int b = Integer.valueOf(stack.pop());\r\n                int index = operators.indexOf(t);\r\n                switch(index){\r\n                    case 0:\r\n                        stack.push(String.valueOf(a+b));\r\n                        break;\r\n                    case 1:\r\n                        stack.push(String.valueOf(b-a));\r\n                        break;\r\n                    case 2:\r\n                        stack.push(String.valueOf(a*b));\r\n                        break;\r\n                    case 3:\r\n                        stack.push(String.valueOf(b/a));\r\n                        break;\r\n                }\r\n            }\r\n        }\r\n \r\n        returnValue = Integer.valueOf(stack.pop());\r\n \r\n        return returnValue;\r\n',
  },
  {
    ID: 27,
    Name: "152. Maximum Product Subarray.cpp",
    Content:
      "#define fo(i, k, n) for(int i = k; i \u003c n; i++)\r\nclass Solution {\r\npublic:\r\n    int maxProduct(vector\u003cint\u003e\u0026 nums) {\r\n        int n = nums.size();\r\n        int ans = nums[0], rmx = nums[0], rmn = nums[0];\r\n        fo(i, 1, n){\r\n            int cmax = rmx;\r\n            rmx = max({rmx*nums[i], nums[i], rmn*nums[i]});\r\n            rmn = min({cmax*nums[i], rmn*nums[i], nums[i]});\r\n            ans = max(rmx,ans);\r\n        }\r\n        return ans ;\r\n    }\r\n};\r\n",
  },
  {
    ID: 28,
    Name: "152. Maximum Product Subarray.java",
    Content:
      "class Solution {\r\n    public int maxProduct(int[] arr) {\r\n        int n = arr.length;\r\n        int min = arr[0];\r\n        int max = arr[0];\r\n        int ans = arr[0];\r\n        \r\n        for (int i = 1; i \u003c n; i++) {\r\n            if (arr[i] \u003c 0) {\r\n                int t = min;\r\n                min = max;\r\n                max = t;\r\n            }\r\n            \r\n            min = Math.min(arr[i], min * arr[i]);\r\n            max = Math.max(arr[i], max * arr[i]);\r\n            \r\n            ans = Math.max(ans, max);\r\n        }\r\n        \r\n        return ans;\r\n    }\r\n}\r\n",
  },
  {
    ID: 29,
    Name: "155. Min Stack.cpp",
    Content:
      "struct Element\r\n{\r\n    int val;\r\n    int min;\r\n};\r\n​\r\nclass MinStack\r\n{\r\n    stack\u003cElement\u003e m_data;\r\n    int curr_min;\r\npublic:\r\n    /** initialize your data structure here. */\r\n    MinStack()\r\n​\r\n    void push(int x)\r\n    {\r\n        Element e;\r\n        e.val = x;\r\n        if( m_data.empty()){\r\n            curr_min = INT32_MAX;\r\n        }\r\n        if( curr_min \u003e x){\r\n            curr_min = x;\r\n        }\r\n        e.min = curr_min;\r\n        m_data.push(e);\r\n    }\r\n​\r\n    void pop()\r\n    {\r\n        m_data.pop();\r\n        if(!m_data.empty())\r\n            curr_min = m_data.top().min;\r\n    }\r\n​\r\n    int top()\r\n",
  },
  {
    ID: 30,
    Name: "160. Intersection of Two Linked Lists.cpp",
    Content:
      "/**\r\n * Definition for singly-linked list.\r\n * struct ListNode {\r\n *     int val;\r\n *     ListNode *next;\r\n *     ListNode(int x) : val(x), next(NULL) {}\r\n * };\r\n */\r\nclass Solution {\r\npublic:\r\n    ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {\r\n        // set\u003cListNode*\u003e  cache;\r\n        // if(headA == NULL or headB == NULL){\r\n        //     return NULL;\r\n        // }\r\n        // while(headA != NULL){\r\n        //     cache.insert(headA);\r\n        //     headA = headA-\u003enext;\r\n        // }\r\n        // while(headB){\r\n        //     if(cache.count(headB)){\r\n        //         return headB;\r\n        //     }\r\n        //     headB = headB-\u003enext;\r\n        // }\r\n        // return NULL ;\r\n        \r\n          ListNode* pa = headA, *pb = headB;\r\n        while (pa != pb) {\r\n            if(pa!=NULL)\r\n                pa = pa-\u003enext;\r\n            else\r\n                pa = headB;\r\n            if(pb!=NULL)\r\n                pb = pb-\u003enext;\r\n            else\r\n                pb = headA;\r\n        }\r\n        return pa;\r\n    }\r\n};\r\n",
  },
  {
    ID: 31,
    Name: "162. Find Peak Element.cpp",
    Content:
      "class Solution {\r\npublic:\r\n    int findPeakElement(vector\u003cint\u003e\u0026 nums) {\r\n        // int n = nums.size();\r\n        // int lo = 0, hi = n-1;   \r\n        // while(lo \u003c hi) {\r\n        //     int mid = lo+(hi-lo)/2;\r\n        //     if(nums[mid] \u003c nums[mid+1]){\r\n        //         lo = mid + 1;\r\n        //     }\r\n        //     else {\r\n        //         hi = mid;\r\n        //     }\r\n        // }\r\n        // return lo;\r\n        \r\n        int maxelem = *max_element(nums.begin(), nums.end());\r\n        return find(nums.begin(), nums.end(), maxelem) - nums.begin();\r\n    }\r\n};\r\n",
  },
  {
    ID: 32,
    Name: "1641. Count Sorted Vowel Strings.cpp",
    Content:
      'class Solution {\r\n    string vowels = "aeiou";\r\npublic:\r\n    int easyMathSolution(int n) {\r\n        return ((n+4)*(n+3)*(n+2)*(n)) / 24\r\n    }\r\n    int countVowelStrings(int n) {\r\n        int ans = 0;\r\n        for (char x : vowels ) {\r\n            ans += dfs(x, n-1);\r\n        }\r\n        return ans;\r\n    }\r\n    int dfs(char lastvowel, int n) {\r\n        if (n==0) {\r\n            return 1;\r\n        }\r\n        int ans=0;\r\n        for (char vowel : vowels) {\r\n            if (vowel \u003e= lastvowel) \r\n                ans+=dfs(vowel, n-1);\r\n        }\r\n        return ans;\r\n    }\r\n};\r\n',
  },
  {
    ID: 33,
    Name: "1646. Get Maximum in Generated Array.cpp",
    Content:
      "class Solution {\r\n    vector\u003cint\u003e nums;\r\npublic:\r\n    int getMaximumGenerated(int n) {\r\n        if(n \u003c 2) {\r\n            return n;\r\n        }\r\n        nums.resize(n+1);\r\n        nums[1] = 1;\r\n        \r\n        for (int i = 2; i \u003c= n; i++) {\r\n            if(i\u00261) {\r\n                nums[i] = nums[i/2]+nums[(i/2)+1];\r\n            }\r\n            else {\r\n                nums[i] = nums[i/2];\r\n            }\r\n        }\r\n     \r\n        return *max_element(nums.begin(), nums.end());\r\n    }\r\n};\r\n",
  },
  {
    ID: 34,
    Name: "1658. Minimum Operations to Reduce X to Zero.cpp",
    Content:
      "class Solution {\r\n    const int inf = 2e9+88;\r\npublic:\r\n    int minOperations(vector\u003cint\u003e\u0026 nums, int x) {\r\n       int sum = -x;\r\n       for (int z : nums)\r\n            sum += z;\r\n       if(sum==0){\r\n           return (int) nums.size();\r\n       }\r\n        if (sum \u003c 0)\r\n            return -1;\r\n        int ans = -1, pref = 0, lo=0;\r\n        for (int i = 0; i \u003c (int) nums.size(); i++) {\r\n            pref+=nums[i];\r\n            while (pref \u003e sum) {\r\n                pref = pref - nums[lo++];\r\n            }\r\n            if (pref == sum) {\r\n                // got ans\r\n                ans = max(ans, i - lo + 1);\r\n            }\r\n        }\r\n        return ans==-1 ? -1 : (int) nums.size() - ans;\r\n    }\r\n};\r\n",
  },
  {
    ID: 35,
    Name: "1662. Check If Two String Arrays are Equivalent.cpp",
    Content:
      'class Solution {\r\npublic:\r\n    bool arrayStringsAreEqual(vector\u003cstring\u003e\u0026 word1, vector\u003cstring\u003e\u0026 word2) {\r\n        string s = "", t = "";\r\n        for (string x : word1)\r\n            s += x;\r\n        \r\n        for (string x : word2)\r\n            t += x;\r\n        \r\n        return s==t; \r\n    }\r\n};\r\n',
  },
  {
    ID: 36,
    Name: "1679. Max Number of K-Sum Pairs.cpp",
    Content:
      "class Solution {\r\npublic:\r\n    int maxOperations(vector\u003cint\u003e\u0026 nums, int k) {\r\n        unordered_map\u003cint, int\u003e cache;\r\n        for (int x : nums)\r\n           cache[x]++;\r\n        \r\n        int ans=0;\r\n        for(pair\u003cint, int\u003e const \u0026pp : cache) {\r\n            int key = pp.first;\r\n            int compp = k - key;\r\n            if (cache.count(key) \u0026\u0026 cache.count(compp)) {\r\n                // 1 4\r\n                if(key != compp) { // meaning they are distinct\r\n                    ans += min(cache[key], cache[compp]); // pair\u003c\u003e found!\r\n                    cache[key]=0, cache[compp]=0;\r\n                } else {\r\n                    ans += floor(cache[key]/2);\r\n                    cache[key]=0;\r\n                }\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n};\r\n",
  },
  {
    ID: 37,
    Name: "169. Majority Element.cpp",
    Content:
      "class Solution {\r\npublic:\r\n    int majorityElement(vector\u003cint\u003e\u0026 nums) {\r\n        int n = nums.size();\r\n        unordered_map\u003cint, int\u003e cache ;\r\n        for(auto \u0026\u0026x : nums ){\r\n            cache[x]++;\r\n        }\r\n        int ans= 0;\r\n        for(int x : nums){\r\n            if(ans \u003c= cache[x] \u0026\u0026 (n / 2) \u003c cache[x] ){\r\n                ans = x;\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n};\r\n",
  },
  {
    ID: 38,
    Name: "17. Letter Combinations of a Phone Number.cpp",
    Content:
      'class Solution {\r\npublic:\r\n    vector\u003cstring\u003e mapps = {\r\n            "0",\r\n            "1",\r\n            "abc",\r\n            "def",\r\n            "ghi",\r\n            "jkl",\r\n            "mno",\r\n            "pqrs",\r\n            "tuv",\r\n            "wxyz"\r\n        };\r\n    \r\n    vector\u003cstring\u003e letterCombinations(string digits) {\r\n        vector\u003cstring\u003e answers;\r\n        if(digits.length() == 0 || digits.empty()) {\r\n            return answers;\r\n        }\r\n        dfs(answers, digits, "", 0);\r\n        return answers;\r\n    }\r\n    \r\n    void dfs(vector\u003cstring\u003e\u0026 answers, string digits, string curr, int index) {\r\n        if(digits.length() == index) {\r\n            answers.push_back(curr);\r\n            return ;\r\n        }\r\n        string letters = mapps[digits[index] - \'0\'];\r\n        for(auto letter : letters) {\r\n            f(answers, digits, curr+letter, index+1);\r\n        }\r\n    }\r\n};\r\n',
  },
  {
    ID: 39,
    Name: "171. Excel Sheet Column Number.cpp",
    Content:
      "class Solution {\r\npublic:\r\n    int titleToNumber(string s) {\r\n        long long int n=0;\r\n        for(auto c: s){\r\n            n = (n * 26) + (int)(c - 'A' + 1);\r\n        }\r\n        return n;\r\n    }\r\n};\r\n",
  },
  {
    ID: 40,
    Name: "172. Factorial Trailing Zeroes.py",
    Content:
      "import math\r\n​\r\nclass Solution:\r\n    def trailingZeroes(self, n: int) -\u003e int:\r\n        if n \u003c 5:\r\n            return 0\r\n        ans = 0\r\n        while n \u003e 4:\r\n            ans+=int(n/5)\r\n            n = n / 5\r\n            \r\n        return ans\r\n",
  },
  {
    ID: 41,
    Name: "173. Binary Search Tree Iterator.cpp",
    Content:
      " *     TreeNode() : val(0), left(nullptr), right(nullptr) {}\r\n *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\r\n *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\r\n * };\r\n */\r\nclass BSTIterator {\r\n    int index = 0;\r\n    vector\u003cint\u003e nodes;\r\n    stack \u003cTreeNode*\u003e cache;\r\npublic:\r\n    BSTIterator(TreeNode* root) {\r\n        // inorder(root) ;\r\n        dfs(root) ;\r\n    }\r\n    \r\n    void dfs(TreeNode* root) {\r\n       while(root) {\r\n           cache.push(root) ;\r\n           root = root -\u003e left ;\r\n       }\r\n    }\r\n    \r\n    int next() {\r\n        // return nodes[index++] ;\r\n        TreeNode* top = cache.top();\r\n        cache.pop(); // delete from stack\r\n        dfs(top-\u003e right) ;\r\n        return top -\u003e val ;\r\n    }\r\n    \r\n    bool hasNext() {\r\n        // return index \u003c (int) nodes.size( ) ;\r\n        \r\n        return !cache.empty();\r\n    }\r\n};\r\n​\r\n/**\r\n * Your BSTIterator object will be instantiated and called as such:\r\n * BSTIterator* obj = new BSTIterator(root);\r\n * int param_1 = obj-\u003enext();\r\n * bool param_2 = obj-\u003ehasNext();\r\n */\r\n",
  },
  {
    ID: 42,
    Name: "179. Largest Number.cpp",
    Content:
      'class Solution {\r\npublic:\r\n    string largestNumber(vector\u003cint\u003e\u0026 nums) {\r\n        sort(nums.begin(), nums.end(), [\u0026](const int a, const int b) {\r\n        string x = to_string(a) + to_string(b) ;\r\n        string y = to_string(b) + to_string(a);\r\n        return (x \u003e y) ? 1 : 0 ;\r\n    });\r\n        if(nums[0] == 0){ return "0" ; }\r\n        string s = "";\r\n        for(auto \u0026\u0026x : nums) { s += to_string(x) ; }\r\n        return s ;\r\n    }\r\n};\r\n',
  },
  {
    ID: 43,
    Name: "189. Rotate Array.cpp",
    Content:
      "class Solution {\r\npublic:\r\n    void rotate(vector\u003cint\u003e\u0026 nums, int k) { \r\n       if(k == 0 or nums.size() == 0)\r\n           return;\r\n        \r\n         if(k\u003enums.size())\r\n            k=k%nums.size();\r\n        \r\n        reverse(nums.begin(), nums.end());\r\n        reverse(nums.begin(), nums.begin()+k);\r\n        reverse(nums.begin()+k, nums.end());\r\n        return;\r\n    }\r\n};\r\n",
  },
  {
    ID: 44,
    Name: "19. Remove Nth Node From End of List.cpp",
    Content:
      "/**\r\n * Definition for singly-linked list.\r\n * struct ListNode {\r\n *     int val;\r\n *     ListNode *next;\r\n *     ListNode() : val(0), next(nullptr) {}\r\n *     ListNode(int x) : val(x), next(nullptr) {}\r\n *     ListNode(int x, ListNode *next) : val(x), next(next) {}\r\n * };\r\n */\r\nclass Solution {\r\npublic:\r\n    ListNode* removeNthFromEnd(ListNode* head, int k) {\r\n        ListNode* root = new ListNode() ;\r\n        root-\u003enext = head;\r\n        ListNode* f = root, *s = root;\r\n        for(int i = 1; i \u003c= k+1; i++)\r\n            f = f -\u003e next;\r\n        \r\n        while(f){\r\n            f = f -\u003e next;\r\n            s = s -\u003e next;\r\n        }\r\n        ListNode* d = s-\u003enext;\r\n        s-\u003enext = s-\u003enext-\u003enext;\r\n        delete d;\r\n        return root-\u003enext;\r\n    }\r\n};\r\n",
  },
  {
    ID: 45,
    Name: "190. Reverse Bits.cpp",
    Content:
      "class Solution {\r\npublic:\r\n    uint32_t reverseBits(uint32_t n) {\r\n          // you need treat n as an unsigned value\r\n   int res = 0;\r\n        int x = 31;\r\n        while(x \u003e= 0){\r\n            res = res ^ ((n \u0026 0x1) \u003c\u003c (x--));\r\n            n \u003e\u003e= 0x1;\r\n        }\r\n​\r\n        return res;\r\n    }\r\n};\r\n",
  },
  {
    ID: 46,
    Name: "191. Number of 1 Bits.cpp",
    Content:
      "class Solution {\r\npublic:\r\n    int hammingWeight(uint32_t n) {\r\n       int ans = 0 ;\r\n        while(n){\r\n           ans += (n \u0026 1);\r\n            n = n \u003e\u003e 1;\r\n        }\r\n        return ans;\r\n    }\r\n};\r\n",
  },
  {
    ID: 47,
    Name: "198. House Robber.cpp",
    Content:
      "class Solution {\r\npublic:\r\n    int rob(vector\u003cint\u003e\u0026 nums) {\r\n        if(nums.empty() or nums.size() == 0){\r\n            return 0;\r\n        }\r\n        if(nums.size() == 1){\r\n            return nums[0];\r\n        }\r\n        if(nums.size() == 0){\r\n            return max(nums[0], nums[1]);\r\n        }\r\n        int n = nums.size();\r\n        vector\u003cint\u003e dp(n);\r\n        dp[0] = nums[0];\r\n        dp[1] = max(nums[0], nums[1]);\r\n        for(int i = 2; i \u003c n; i++){\r\n            dp[i] = max(nums[i] + dp[i-2], dp[i-1]);\r\n        }\r\n        return dp[n-1];\r\n    }\r\n};\r\n",
  },
  {
    ID: 48,
    Name: "2. Add Two Numbers.cpp",
    Content:
      "/**\r\n * Definition for singly-linked list.\r\n * struct ListNode {\r\n *     int val;\r\n *     ListNode *next;\r\n *     ListNode() : val(0), next(nullptr) {}\r\n *     ListNode(int x) : val(x), next(nullptr) {}\r\n *     ListNode(int x, ListNode *next) : val(x), next(next) {}\r\n * };\r\n */\r\nclass Solution {\r\npublic:\r\n    ListNode* addTwoNumbers(ListNode* root1, ListNode* root2) {\r\n        if(!root1) {\r\n            return root2;\r\n        }\r\n        if(!root2) {\r\n            return root1 ;\r\n        }\r\n        ListNode *answer = NULL, *t, *prev(NULL) ;\r\n        int cursum = 0, carry = 0 ;\r\n        while(root1 or root2) {\r\n            cursum = carry + ( root1 ? root1-\u003eval : 0 ) + ( root2 ? root2-\u003eval : 0 ) ;\r\n            carry = (cursum \u003e 9) ? 1 : 0 ;\r\n            cursum %= 10 ;\r\n            t = new ListNode(cursum) ;\r\n            if(!answer) { answer = t ; }\r\n            else {\r\n                prev-\u003enext = t ;\r\n            }\r\n            prev = t ;\r\n            if(root1) { root1 = root1-\u003enext ; }\r\n            if(root2) { root2 = root2-\u003enext ; }\r\n        }\r\n        if(carry \u003e 0) {\r\n",
  },
  {
    ID: 49,
    Name: "20. Valid Parentheses.cpp",
    Content:
      "class Solution {\r\npublic:\r\n   bool isValid(string s) {\r\n        \r\n        map\u003cchar,char\u003e closing; // the set of closing parenthesis\r\n        closing[')'] = '('; // the opening parenthesis of the closing parenthesis\r\n        closing[']'] = '[';\r\n        closing['}'] = '{';\r\n        \r\n        stack\u003cchar\u003e stack;\r\n        map\u003cchar,char\u003e::iterator it;\r\n        for (int i = 0; i \u003c s.size(); i++)  {\r\n            it = closing.find(s[i]);\r\n            if (it != closing.end())     // if s[i] is found in closing\r\n                if (!stack.empty() \u0026\u0026 it-\u003esecond == stack.top())    // if stack is not empty and its top element is the opening parenthesis of the closing parenthesis s[i]\r\n                    stack.pop();\r\n                else\r\n                    return false;\r\n            else\r\n                stack.push(s[i]);   // add the opening s[i] to stack\r\n        }\r\n                \r\n        if (stack.empty())\r\n            return true;\r\n        else\r\n            return false;\r\n    }\r\n};\r\n",
  },
  {
    ID: 50,
    Name: "200. Number of Islands.cpp",
    Content:
      "class Solution {\r\npublic:\r\n    int numIslands(vector\u003cvector\u003cchar\u003e\u003e\u0026 grid) {\r\n        \r\n        if(grid.empty()) {\r\n            return 0;\r\n        }\r\n        \r\n        int H = grid.size(),\r\n            W = grid[0].size();\r\n        \r\n        int ans = 0;\r\n        for(int row = 0; row \u003c H; row++) {\r\n            for(int col = 0; col \u003c W; col++) {\r\n                if(grid[row][col] == '1') {\r\n                    ans += dfs(grid, row, col, H, W);\r\n                }\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n    \r\n    int dfs(vector\u003cvector\u003cchar\u003e\u003e\u0026 grid, int row, int col, int H, int W) {\r\n        \r\n        if(row \u003c 0 or row \u003e= H || col \u003c 0 or col \u003e= W || grid[row][col] != '1' ) {\r\n            return 0;\r\n        }\r\n        \r\n        grid[row][col] = '0';\r\n        \r\n        dfs(grid, row+1, col, H, W);\r\n        dfs(grid, row-1, col, H, W);\r\n        dfs(grid, row, col+1, H, W);\r\n        dfs(grid, row, col-1, H, W);\r\n        \r\n        return 1;\r\n    }\r\n};\r\n",
  },
  {
    ID: 51,
    Name: "202. Happy Number.cpp",
    Content:
      "class Solution {\r\npublic:\r\n    bool isHappy(int n) {\r\n        set\u003cint\u003e cache;\r\n        while(!cache.count(n)){\r\n            cache.insert(n);\r\n            n = f(n);\r\n            if(n == 1){\r\n                return true;\r\n            }\r\n        }\r\n        return false;\r\n    }\r\n    int f(int n) {\r\n        int sum = 0;\r\n        while(n \u003e 0){\r\n            sum += (n % 10) * (n % 10);\r\n            n = n / 10;\r\n        }\r\n        return sum;\r\n    }\r\n};\r\n",
  },
  {
    ID: 52,
    Name: "204. Count Primes.cpp",
    Content:
      "class Solution {\r\npublic:\r\n    int countPrimes(int n) {\r\n        if(n \u003c 2){\r\n            return 0;\r\n        }\r\n        \r\n        vector\u003cbool\u003e primee(n + 1) ;\r\n        for(long long int i = 2; i \u003c n + 1; i++){\r\n            if(!primee[i]){\r\n                for(long long int j = i * i; j \u003c n + 1; j += i){\r\n                    primee[j] = true;\r\n                }\r\n            }\r\n        }\r\n        \r\n        int ans = 0;\r\n        for(int i = 2; i \u003c n ; i++){\r\n            if(primee[i] == false){\r\n                ans++;\r\n            }\r\n        }\r\n        \r\n        return ans;\r\n    }\r\n};\r\n",
  },
  {
    ID: 53,
    Name: "206. Reverse Linked List.cpp",
    Content:
      "/**\r\n * Definition for singly-linked list.\r\n * struct ListNode {\r\n *     int val;\r\n *     ListNode *next;\r\n *     ListNode() : val(0), next(nullptr) {}\r\n *     ListNode(int x) : val(x), next(nullptr) {}\r\n *     ListNode(int x, ListNode *next) : val(x), next(next) {}\r\n * };\r\n */\r\n​\r\nusing Node = ListNode;\r\n​\r\nclass Solution {\r\npublic:\r\n    ListNode* reverseList(ListNode* root) {\r\n        if(root == NULL or root-\u003enext == NULL){\r\n            return root;\r\n        }\r\n        Node* nroot = reverseList(root-\u003enext);\r\n        root-\u003enext-\u003enext = root;\r\n        root-\u003enext = NULL;\r\n        return nroot;\r\n    }\r\n};\r\n",
  },
  {
    ID: 54,
    Name: "21. Merge Two Sorted Lists.cpp",
    Content:
      "/**\r\n * Definition for singly-linked list.\r\n * struct ListNode {\r\n *     int val;\r\n *     ListNode *next;\r\n *     ListNode() : val(0), next(nullptr) {}\r\n *     ListNode(int x) : val(x), next(nullptr) {}\r\n *     ListNode(int x, ListNode *next) : val(x), next(next) {}\r\n * };\r\n */\r\nclass Solution {\r\npublic:\r\n    ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {\r\n        ListNode fake(-1);\r\n        ListNode* last = \u0026fake;\r\n        \r\n        while(l1 != NULL \u0026\u0026 l2 != NULL){\r\n            if(l1-\u003eval \u003c l2-\u003eval){\r\n                last-\u003enext = l1;\r\n                last = l1;\r\n                l1 = l1-\u003enext;\r\n            }else{\r\n                last-\u003enext = l2;\r\n                last = l2;\r\n                l2 = l2-\u003enext;\r\n            }\r\n        }\r\n        \r\n        if(l1 != NULL){\r\n            last-\u003enext = l1;\r\n        }\r\n        if(l2 != NULL){\r\n            last-\u003enext = l2;\r\n        }\r\n        return fake.next;\r\n    }\r\n};\r\n",
  },
  {
    ID: 55,
    Name: "215. Kth Largest Element in an Array.cpp",
    Content:
      "class Solution {\r\npublic:\r\n    int findKthLargest(vector\u003cint\u003e\u0026 nums, int k) {\r\n        priority_queue\u003cint, vector\u003cint\u003e\u003e q(nums.begin(), nums.end());\r\n        while(--k) {\r\n            q.pop();\r\n        }\r\n        return q.top();\r\n    }\r\n};\r\n",
  },
  {
    ID: 56,
    Name: "217. Contains Duplicate.cpp",
    Content:
      "class Solution {\r\npublic:\r\n    bool containsDuplicate(vector\u003cint\u003e\u0026 nums) {\r\n        set\u003cint\u003e cache ;\r\n        for(auto \u0026\u0026 x : nums ){\r\n            if(cache.count(x)){\r\n                return true;\r\n            }\r\n                cache.insert(x);\r\n        }\r\n        return false;\r\n    }\r\n};\r\n",
  },
  {
    ID: 57,
    Name: "227. Basic Calculator II.cpp",
    Content:
      "            }\r\n             \r\n            values.push(val);\r\n             \r\n            // right now the i points to \r\n            // the character next to the digit,\r\n            // since the for loop also increases \r\n            // the i, we would skip one \r\n            //  token position; we need to \r\n            // decrease the value of i by 1 to\r\n            // correct the offset.\r\n              i--;\r\n        }\r\n         \r\n        // Closing brace encountered, solve \r\n        // entire brace.\r\n        else if(tokens[i] == ')')\r\n        {\r\n            while(!ops.empty() \u0026\u0026 ops.top() != '(')\r\n            {\r\n                int val2 = values.top();\r\n                values.pop();\r\n                 \r\n                int val1 = values.top();\r\n                values.pop();\r\n                 \r\n                char op = ops.top();\r\n                ops.pop();\r\n                 \r\n                values.push(applyOp(val1, val2, op));\r\n            }\r\n             \r\n            // pop opening brace.\r\n            if(!ops.empty())\r\n               ops.pop();\r\n        }\r\n         \r\n        // Current token is an operator.\r\n        else\r\n        {\r\n            // While top of 'ops' has same or greater \r\n            // precedence to current token, which\r\n            // is an operator. Apply operator on top \r\n            // of 'ops' to top two elements in values stack.\r\n            while(!ops.empty() \u0026\u0026 precedence(ops.top())\r\n                                \u003e= precedence(tokens[i])){\r\n",
  },
  {
    ID: 58,
    Name: "23. Merge k Sorted Lists.cpp",
    Content:
      "/**\r\n * Definition for singly-linked list.\r\n * struct ListNode {\r\n *     int val;\r\n *     ListNode *next;\r\n *     ListNode() : val(0), next(nullptr) {}\r\n *     ListNode(int x) : val(x), next(nullptr) {}\r\n *     ListNode(int x, ListNode *next) : val(x), next(next) {}\r\n * };\r\n */\r\nclass Solution {\r\npublic:\r\n    ListNode* mergeKLists(vector\u003cListNode*\u003e\u0026 lists) {\r\n        if(lists.empty()) {\r\n            return nullptr;\r\n        }\r\n        ListNode* root = new ListNode(-1);\r\n        ListNode* temp = root;\r\n        while(1) {\r\n            int curr = 0;\r\n            for(int i = 0; i \u003c lists.size(); i++) {\r\n                if(lists[curr]==nullptr || (lists[i]!=nullptr \u0026\u0026 lists[curr]-\u003eval \u003e lists[i]-\u003eval)) {\r\n                    curr=i;\r\n                }\r\n            }\r\n            if(lists[curr]==nullptr)\r\n                break;\r\n            temp-\u003enext = lists[curr];\r\n            temp = temp-\u003enext;\r\n            lists[curr]=lists[curr]-\u003enext;\r\n        }\r\n        return root-\u003enext;\r\n    }\r\n};\r\n",
  },
  {
    ID: 59,
    Name: "230. Kth Smallest Element in a BST.java",
    Content:
      "/**\r\n * Definition for a binary tree node.\r\n * public class TreeNode {\r\n *     int val;\r\n *     TreeNode left;\r\n *     TreeNode right;\r\n *     TreeNode() {}\r\n *     TreeNode(int val) { this.val = val; }\r\n *     TreeNode(int val, TreeNode left, TreeNode right) {\r\n *         this.val = val;\r\n *         this.left = left;\r\n *         this.right = right;\r\n *     }\r\n * }\r\n */\r\nclass Solution {\r\n    /*\r\n        jekono BST te inorder traverse korlei to sorted order pawa jai.\r\n        question ta meaning less, but practice concepts of BST\r\n        \r\n        inorder traverse korbo - automatic asc order node pabo,\r\n        simply nodes.get(k-1) korlei asha kori hye jabe!\r\n    */\r\n    private static ArrayList\u003cInteger\u003e nodes = new ArrayList\u003c\u003e();\r\n    public int kthSmallest(TreeNode root, int k) {\r\n        performInOrderTraversal(root);\r\n        return nodes.get(k-1); // 0 based indexing\r\n    }\r\n    \r\n    private static void performInOrderTraversal(TreeNode root) {\r\n        if (root == null) return;\r\n        performInOrderTraversal(root.left);\r\n        nodes.add(root.val);\r\n        performInOrderTraversal(root.right);\r\n    }\r\n}\r\n",
  },
  {
    ID: 60,
    Name: "234. Palindrome Linked List.cpp",
    Content:
      "/**\r\n * Definition for singly-linked list.\r\n * struct ListNode {\r\n *     int val;\r\n *     ListNode *next;\r\n *     ListNode() : val(0), next(nullptr) {}\r\n *     ListNode(int x) : val(x), next(nullptr) {}\r\n *     ListNode(int x, ListNode *next) : val(x), next(next) {}\r\n * };\r\n */\r\nclass Solution {\r\npublic:\r\n    ListNode* r = NULL;\r\n    bool ans = true;\r\n    \r\n    void solve(ListNode* rt){\r\n        if(rt == NULL){\r\n            return ;\r\n        }\r\n        solve(rt-\u003enext);\r\n        \r\n        if(rt-\u003eval != r-\u003eval){\r\n            ans = false;\r\n            return;\r\n        }\r\n        r = r-\u003enext;\r\n    }\r\n    \r\n    bool isPalindrome(ListNode* head) {\r\n        // stack\u003cint\u003e cache;\r\n        // ListNode* r = head;\r\n        // while(r){\r\n        //     cache.push(r-\u003eval);\r\n        //     r = r-\u003enext;\r\n        // }\r\n        // r = head;\r\n        // while(r){\r\n        //     if(cache.top() != r-\u003eval){\r\n        //         return false;\r\n        //     }\r\n        //     r = r-\u003enext;\r\n        //     cache.pop();\r\n        // }\r\n        // return true;\r\n        \r\n        r = head;\r\n        solve(head);\r\n        return ans;\r\n    }\r\n};\r\n",
  },
  {
    ID: 61,
    Name: "234. Palindrome Linked List.py",
    Content:
      "# Definition for singly-linked list.\r\n# class ListNode:\r\n#     def __init__(self, val=0, next=None):\r\n#         self.val = val\r\n#         self.next = next\r\nclass Solution:\r\n    def isPalindrome(self, head: ListNode) -\u003e bool:\r\n        \r\n",
  },
  {
    ID: 62,
    Name: "237. Delete Node in a Linked List.cpp",
    Content:
      "/**\r\n * Definition for singly-linked list.\r\n * struct ListNode {\r\n *     int val;\r\n *     ListNode *next;\r\n *     ListNode(int x) : val(x), next(NULL) {}\r\n * };\r\n */\r\nclass Solution {\r\npublic:\r\n    void deleteNode(ListNode* node) {\r\n        node-\u003eval = node-\u003enext-\u003eval;\r\n        node-\u003enext = node-\u003enext-\u003enext;\r\n    }\r\n};\r\n",
  },
  {
    ID: 63,
    Name: "24. Swap Nodes in Pairs.cpp",
    Content:
      "/**\r\n * Definition for singly-linked list.\r\n * struct ListNode {\r\n *     int val;\r\n *     ListNode *next;\r\n *     ListNode() : val(0), next(nullptr) {}\r\n *     ListNode(int x) : val(x), next(nullptr) {}\r\n *     ListNode(int x, ListNode *next) : val(x), next(next) {}\r\n * };\r\n */\r\nclass Solution {\r\npublic:\r\n    ListNode* swapPairs(ListNode* head) {\r\n        ListNode* extra = new ListNode();\r\n        extra-\u003enext = head;\r\n        f(extra);\r\n        return extra-\u003enext;\r\n    }\r\n    void f (ListNode* root) {\r\n        if (!root) {\r\n            return ;\r\n        }\r\n        ListNode* first = root-\u003enext;\r\n        ListNode* second = nullptr;\r\n        if (first) {\r\n            second = first-\u003enext;\r\n        }\r\n        if (second) {\r\n            ListNode* snext = second-\u003enext;\r\n            second-\u003enext = first ;\r\n            root-\u003enext = second;\r\n            first-\u003enext = snext; \r\n            f(first);\r\n        }\r\n    }\r\n};\r\n",
  },
  {
    ID: 64,
    Name: "240. Search a 2D Matrix II.java",
    Content:
      "class Solution {\r\n     public boolean searchMatrix(int[][] matrix, int target) {\r\n        int r = 0;\r\n       int c = matrix[0].length - 1;\r\n       while(r \u003c matrix.length \u0026\u0026 c \u003e= 0) {\r\n           if (matrix[r][c] == target)\r\n            return true;\r\n           else if (matrix[r][c] \u003e target) c--;\r\n           else r++;\r\n       }\r\n        return false;\r\n    }\r\n​\r\n    private boolean searchElem(int[] arr, int target) {\r\n        int lo = 0;\r\n        int hi = arr.length - 1;\r\n        while(lo \u003c= hi) {\r\n            int mid = (lo+hi) / 2;\r\n            if (arr[mid] == target)\r\n                return true;\r\n            else if (arr[mid] \u003e target)\r\n                lo = mid + 1;\r\n            else hi = mid - 1;\r\n        }\r\n        return false;\r\n    }\r\n}\r\n",
  },
  {
    ID: 65,
    Name: "242. Valid Anagram.cpp",
    Content:
      "class Solution {\r\npublic:\r\n    bool isAnagram(string s, string t) {\r\n        sort(s.begin(), s.end());\r\n        sort(t.begin(), t.end());\r\n        return s == t;\r\n    }\r\n};\r\n",
  },
  {
    ID: 66,
    Name: "26. Remove Duplicates from Sorted Array.cpp",
    Content:
      "class Solution {\r\npublic:\r\n    int removeDuplicates(vector\u003cint\u003e\u0026 nums) {\r\n        // auto itr = unique(nums.begin(), nums.end());\r\n        // nums.resize(distance(nums.begin(), itr));\r\n        // return nums.size();\r\n        \r\n        int n = nums.size();\r\n        if (n \u003c 2) return n;\r\n        \r\n        int tmp = nums[0];\r\n        int ret = 1;\r\n        for (int i = 1; i \u003c n; i++) {\r\n            if (tmp != nums[i]) {\r\n                nums[ret] = nums[i];\r\n                ret++;\r\n                \r\n                tmp = nums[i];\r\n            }\r\n        }\r\n        \r\n        return ret;\r\n    }\r\n};\r\n",
  },
  {
    ID: 67,
    Name: "268. Missing Number.cpp",
    Content:
      "class Solution {\r\npublic:\r\n    int missingNumber(vector\u003cint\u003e\u0026 nums) {\r\n        int n=nums.size();\r\n       int x1 =0; \r\n        int x2=0;\r\n        for(int i=0;i\u003cn;i++){\r\n            x1^=nums[i];\r\n            x2^=i+1;\r\n        }\r\n        return x1^x2;\r\n    }\r\n};\r\n",
  },
  {
    ID: 68,
    Name: "268. Missing Number.java",
    Content:
      "class Solution {\r\n    public int missingNumber(int[] nums) {\r\n        /**\r\n            naive approch is to just sort and check\r\n            with nums[0] == 0 ? nums[0] - 1 : nums[len-1] + 1;\r\n        \r\n        Arrays.sort(nums);\r\n        for(int i = 1; i \u003c nums.length; i++) {\r\n            int gap = nums[i] - nums[i-1];\r\n            if (gap\u003e1) \r\n                return nums[i-1] + 1;\r\n        }\r\n        if(nums[0] != 0) return nums[0] - 1;\r\n        return nums[nums.length-1] + 1;\r\n        */\r\n        \r\n        int x1 = 0, x2 = 0;\r\n        for (int i = 0; i \u003c nums.length; i++) {\r\n            x1 = x1 ^ nums[i];\r\n            x2 = x2 ^ (i+1);\r\n        }\r\n        return x1 ^ x2;\r\n    }\r\n}\r\n",
  },
  {
    ID: 69,
    Name: "28. Implement strStr().java",
    Content:
      "/* COPIED SOLUTION - DON'T UNDERSTAND THE HOW TO IMPLEMENT */\r\n​\r\nclass Solution {\r\n   public int strStr(String haystack, String needle) {\r\n    if(haystack==null || needle==null)    \r\n        return 0;\r\n \r\n    if(needle.length() == 0)\r\n        return 0;\r\n \r\n    for(int i=0; i\u003chaystack.length(); i++){\r\n        if(i + needle.length() \u003e haystack.length())\r\n            return -1;\r\n \r\n        int m = i;\r\n        for(int j=0; j\u003cneedle.length(); j++){\r\n            if(needle.charAt(j)==haystack.charAt(m)){\r\n                if(j==needle.length()-1)\r\n                    return i;\r\n                m++;\r\n            }else{\r\n                break;\r\n            }\r\n \r\n        }    \r\n    }   \r\n \r\n    return -1;\r\n}\r\n}\r\n",
  },
  {
    ID: 70,
    Name: "283. Move Zeroes.cpp",
    Content:
      "class Solution {\r\npublic:\r\n    void moveZeroes(vector\u003cint\u003e\u0026 nums) {\r\n        int x = 0;\r\n        for(int i = 0; i \u003c nums.size(); i++){\r\n            if(nums[i] != 0){\r\n                nums[x++] = nums[i];\r\n            }\r\n        }\r\n        for(int i = x; i \u003c (int) nums.size(); i++){\r\n            nums[i] = 0;\r\n        }\r\n    }\r\n};\r\n",
  },
  {
    ID: 71,
    Name: "3. Longest Substring Without Repeating Characters.cpp",
    Content:
      "class Solution {\r\npublic:\r\n    int lengthOfLongestSubstring(string s) {\r\n       if (s.empty()){return 0;}\r\n​\r\n        map\u003cint, int\u003e cache ;\r\n        int st = 0, len=1;\r\n        for (int end = 0; end \u003c (int) s.length(); end++) {\r\n            char ch = s[end];\r\n            if (cache.count(ch) \u0026\u0026 st \u003c= cache[ch]) {\r\n                st = cache[ch]+1;\r\n            }\r\n            len = max(len, end-st+1);\r\n            cache[ch]=end;\r\n        }\r\n​\r\n        return len;\r\n    }\r\n};\r\n",
  },
  {
    ID: 72,
    Name: "31. Next Permutation.cpp",
    Content:
      "class Solution {\r\npublic:\r\n    void nextPermutation(vector\u003cint\u003e\u0026 nums) {\r\n        next_permutation(nums.begin(), nums.end());\r\n    }\r\n};\r\n",
  },
  {
    ID: 73,
    Name: "322. Coin Change.java",
    Content:
      "class Solution {\r\n    public int coinChange(int[] coins, int amount) {\r\n           int n = coins.length;\r\n    \r\n    int dp[] = new int[amount + 1];    \r\n     dp[0] = 0;        //  amount = 0 can be made by excuding every coin\r\n    if(amount \u003e 0 \u0026\u0026 coins == null) return 0;\r\n     for(int i = 1; i \u003c= amount; i++) {\r\n        dp[i] = 100000;       // if no coin is available we return a large number or infinity\r\n    }\r\n    \r\n    for(int i = 1; i \u003c= n; i++) {\r\n        for(int j = coins[i-1]; j \u003c= amount; j++) {\r\n            if(j \u003e= coins[i-1]) {\r\n                dp[j] =  Math.min(1 + dp[j-coins[i-1]], dp[j]);  // minimum of (Include , Exclude)\r\n            } else { \r\n                dp[j] = dp[j];  // else exlude the current coin \r\n            }\r\n        }\r\n    }\r\n    return dp[amount] \u003e amount ? -1 : dp[amount];\r\n    }\r\n}\r\n",
  },
  {
    ID: 74,
    Name: "326. Power of Three.cpp",
    Content:
      "class Solution {\r\npublic:\r\n    bool isPowerOfThree(int n) {\r\n       return (n \u003e 0) \u0026\u0026 pow(3,19) % n == 0;\r\n    }\r\n};\r\n",
  },
  {
    ID: 75,
    Name: "328. Odd Even Linked List.cpp",
    Content:
      "using Node = ListNode;\r\nclass Solution {\r\npublic:\r\n    ListNode* oddEvenList(ListNode* root) {\r\n        if (root == nullptr || root-\u003enext == nullptr) {\r\n            return root;\r\n        }\r\n        Node *even = nullptr, *odd = nullptr, *tmp = root;\r\n        Node* t = nullptr, *p = nullptr; int c = 1;\r\n        while(tmp != nullptr) {\r\n            if (c \u0026 1) {\r\n                if (odd == nullptr) {\r\n                    odd = new Node(tmp-\u003eval);\r\n                    t = odd;\r\n                } else {\r\n                    Node *newnode = new Node(tmp-\u003eval);\r\n                    odd-\u003enext = newnode;\r\n                    odd = newnode;\r\n                }\r\n            } else {\r\n                if (even == nullptr) {\r\n                    even = new Node(tmp-\u003eval);\r\n                    p = even;\r\n                }else {\r\n                    Node *newnode = new Node(tmp-\u003eval);\r\n                    even-\u003enext = newnode;\r\n                    even = newnode;\r\n                }\r\n            }\r\n            tmp = tmp-\u003enext;\r\n            c++;\r\n        }\r\n        odd-\u003enext = p;\r\n        root = t;\r\n        return root;\r\n    }\r\n};\r\n",
  },
  {
    ID: 76,
    Name: "328. Odd Even Linked List.go",
    Content:
      "/**\r\n * Definition for singly-linked list.\r\n * type ListNode struct {\r\n *     Val int\r\n *     Next *ListNode\r\n * }\r\n */func oddEvenList(head *ListNode) *ListNode {\r\n    if head == nil || head.Next == nil {\r\n        return head\r\n    }\r\n    \r\n    \r\n    second := head.Next\r\n    \r\n    tmp := head\r\n    odd := head\r\n    even := head.Next\r\n    count := 1\r\n    \r\n    for tmp != nil {\r\n        if count % 2 != 0 \u0026\u0026 tmp != head {\r\n            odd.Next = tmp\r\n            odd = tmp\r\n        } \r\n        if count % 2 == 0 \u0026\u0026 tmp != second {\r\n            even.Next = tmp\r\n            even = tmp\r\n        }\r\n        tmp = tmp.Next\r\n        count += 1\r\n    }\r\n    \r\n    even.Next = nil\r\n    odd.Next = second\r\n    \r\n    return head\r\n}\r\n",
  },
  {
    ID: 77,
    Name: "33. Search in Rotated Sorted Array.cpp",
    Content:
      "class Solution {\r\npublic:\r\n    int search(vector\u003cint\u003e\u0026 nums, int target) {\r\n    int n = nums.size();\r\n    if(n == 0){\r\n        return -1;\r\n    }\r\n    int low = 0, high = n-1;\r\n    int firstel = nums[0];\r\n    while(low \u003c= high)\r\n    {\r\n        int mid = low + (high-low)/2;\r\n        int value = nums[mid];\r\n        if(target == value){\r\n            return mid;\r\n        }\r\n        int am_big = value \u003e= firstel;\r\n        int target_bg = target \u003e= firstel;\r\n        if(am_big == target_bg) {\r\n            if(value \u003c target) {\r\n                low = mid + 1;\r\n            }else {\r\n                high = mid - 1;\r\n            }\r\n        }else {\r\n            if(am_big) {\r\n                low = mid + 1;\r\n            }else {\r\n                high = mid - 1;\r\n            }\r\n        }\r\n    }\r\n        return -1;\r\n    }\r\n};\r\n",
  },
  {
    ID: 78,
    Name: "34. Find First and Last Position of Element in Sorted Array.cpp",
    Content:
      "class Solution {\r\npublic:\r\n    vector\u003cint\u003e searchRange(vector\u003cint\u003e\u0026 nums, int target) {\r\n        if(nums.empty()){\r\n            return {-1,-1} ;\r\n        }\r\n        if(binary_search(nums.begin(), nums.end(), target) == false){\r\n            return {-1,-1} ;\r\n        }\r\n        int lo = lower_bound(nums.begin(), nums.end(), target) - nums.begin();\r\n        int hi = upper_bound(nums.begin(), nums.end(), target) - nums.begin();\r\n        return {lo, hi-1} ;   \r\n    }\r\n};\r\n",
  },
  {
    ID: 79,
    Name: "344. Reverse String.cpp",
    Content:
      "class Solution {\r\npublic:\r\n    void reverseString(vector\u003cchar\u003e\u0026 s) {\r\n       reverse(s.begin(), s.end());\r\n    }\r\n};\r\n",
  },
  {
    ID: 80,
    Name: "350. Intersection of Two Arrays II.cpp",
    Content:
      "class Solution {\r\npublic:\r\n    vector\u003cint\u003e intersect(vector\u003cint\u003e\u0026 nums1, vector\u003cint\u003e\u0026 nums2) {\r\n       vector\u003cint\u003e ans;\r\n        map\u003cint, int\u003e cache;\r\n        for(auto \u0026\u0026 x : nums1){cache[x]++ ;}\r\n        for(auto \u0026\u0026x  : nums2){\r\n            if(cache.find(x) != cache.end()){\r\n                if(cache[x] == 0){continue;}\r\n                else {ans.push_back(x);}\r\n                cache[x]--;\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n};\r\n",
  },
  {
    ID: 81,
    Name: "354. Russian Doll Envelopes.java",
    Content:
      "class Solution {\r\n    public int maxEnvelopes(int[][] envelopes) {\r\n        int n = envelopes.length;\r\n        class Env {\r\n            int w;\r\n            int h;\r\n            int area;\r\n            Env(int w, int h, int a) {\r\n                this.w = w;\r\n                this.h = h;\r\n                this.area = a;\r\n            }\r\n        }\r\n        \r\n        Env[] arr = new Env[n];\r\n        int i = 0;\r\n        for(int[] envelop : envelopes) {\r\n            arr[i++] = new Env(envelop[0], envelop[1], envelop[0]*envelop[1]);\r\n        }\r\n        \r\n        Arrays.sort(arr, new Comparator\u003cEnv\u003e() {\r\n​\r\n            @Override\r\n            public int compare(Env a, Env b) {\r\n                // TODO Auto-generated method stub\r\n                if (a.area \u003c b.area) {\r\n                    return 1;\r\n                }\r\n                return -1;\r\n            }\r\n        });\r\n        \r\n        int lis[] = new int[n];\r\n        Arrays.fill(lis, 1);\r\n        i = 0;\r\n        for (int j = 1; j \u003c n; j++) {\r\n            while(i \u003c j) {\r\n                if (arr[i].w \u003e arr[j].w \u0026\u0026 arr[i].h \u003e arr[j].h) {\r\n                    lis[j] = Math.max(lis[j], lis[i] + 1);\r\n                }\r\n                i++;\r\n            }\r\n            i=0;\r\n        }\r\n        int mx = -1;\r\n        for (int a : lis)\r\n            mx = Math.max(mx, a);\r\n        \r\n        return mx;\r\n    }\r\n}\r\n",
  },
  {
    ID: 82,
    Name: "38. Count and Say.cs",
    Content:
      'public class Solution \r\n{\r\n  public string CountAndSay(int n) \r\n  {\r\n    var result = "1";\r\n    \r\n    if (n == 1) return result;\r\n    \r\n    var i = 1;\r\n    var countSay = 1;\r\n    while (i \u003c n)\r\n    {\r\n      var temp = result;\r\n      result = string.Empty;\r\n      for (var j = 0; j \u003c temp.Length - 1; j++)\r\n      {\r\n        if (temp[j] == temp[j + 1])\r\n        {\r\n          countSay++;\r\n        }\r\n        else\r\n        {\r\n          result += countSay;\r\n          result += temp[j];\r\n          countSay = 1;\r\n        }\r\n      }\r\n      result += countSay;\r\n      result += temp[temp.Length - 1];\r\n      countSay = 1;\r\n      i++;\r\n    }\r\n    return result;\r\n  }\r\n}\r\n',
  },
  {
    ID: 83,
    Name: "382. Linked List Random Node.cpp",
    Content:
      "/**\r\n * Definition for singly-linked list.\r\n * struct ListNode {\r\n *     int val;\r\n *     ListNode *next;\r\n *     ListNode() : val(0), next(nullptr) {}\r\n *     ListNode(int x) : val(x), next(nullptr) {}\r\n *     ListNode(int x, ListNode *next) : val(x), next(next) {}\r\n * };\r\n */\r\nclass Solution {\r\npublic:\r\n    /** @param head The linked list's head.\r\n        Note that the head is guaranteed to be not null, so it contains at least one node. */\r\n    ListNode* root1 = nullptr;\r\n    Solution(ListNode* head) {\r\n        root1 = head;\r\n    }\r\n    \r\n    /** Returns a random node's value. */\r\n    int getRandom() {\r\n        ListNode* root = root1;\r\n        int i = 1, ans = 0;\r\n        while(root) {\r\n            if((float)(rand() / RAND_MAX) \u003c 1.0/i ) {\r\n                ans = root -\u003e val;\r\n            }\r\n            i++;\r\n            root = root -\u003e next;\r\n        }\r\n        return ans;\r\n    }\r\n};\r\n​\r\n/**\r\n * Your Solution object will be instantiated and called as such:\r\n * Solution* obj = new Solution(head);\r\n * int param_1 = obj-\u003egetRandom();\r\n */\r\n",
  },
  {
    ID: 84,
    Name: "382. Linked List Random Node.java",
    Content:
      "/**\r\n * Definition for singly-linked list.\r\n * public class ListNode {\r\n *     int val;\r\n *     ListNode next;\r\n *     ListNode() {}\r\n *     ListNode(int val) { this.val = val; }\r\n *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }\r\n * }\r\n */\r\nclass Solution {\r\n​\r\n    /** @param head The linked list's head.\r\n        Note that the head is guaranteed to be not null, so it contains at least one node. */\r\n    ListNode root = null;\r\n    public Solution(ListNode head) {\r\n        this.root = head;\r\n    }\r\n    \r\n    /** Returns a random node's value. */\r\n    public int getRandom() {\r\n        int i =1, ans = 0;\r\n        ListNode tmp = this.root;\r\n        while(tmp != null) {\r\n            if(Math.random() \u003c 1.0/i ) {\r\n                ans = tmp.val;\r\n            }\r\n            i++;\r\n            tmp = tmp.next;\r\n        }\r\n        return ans;\r\n    }\r\n}\r\n​\r\n/**\r\n * Your Solution object will be instantiated and called as such:\r\n * Solution obj = new Solution(head);\r\n * int param_1 = obj.getRandom();\r\n */\r\n",
  },
  {
    ID: 85,
    Name: "384. Shuffle an Array.cpp",
    Content:
      "class Solution {\r\nprivate:\r\n    std::vector\u003cint\u003e array;\r\n    std::vector\u003cint\u003e arr_copy;\r\n    \r\npublic:\r\n    Solution(std::vector\u003cint\u003e\u0026 nums):\r\n        array(std::move(nums)),\r\n        arr_copy(std::vector\u003cint\u003e { array.begin(), array.end() }) {}\r\n    \r\n    /** Resets the array to its original configuration and return it. */\r\n    std::vector\u003cint\u003e reset() {\r\n        array = arr_copy;\r\n        arr_copy = std::vector\u003cint\u003e { arr_copy.begin(), arr_copy.end() };\r\n        return arr_copy;\r\n    }\r\n    \r\n    /** Returns a random shuffling of the array. */\r\n    std::vector\u003cint\u003e shuffle() {\r\n        std::mt19937 rng { std::random_device{}() };\r\n        std::shuffle(begin(array), end(array), rng);\r\n        return array;\r\n    }\r\n};\r\n​\r\n/**\r\n * Your Solution object will be instantiated and called as such:\r\n * Solution* obj = new Solution(nums);\r\n * vector\u003cint\u003e param_1 = obj-\u003ereset();\r\n * vector\u003cint\u003e param_2 = obj-\u003eshuffle();\r\n */\r\n",
  },
  {
    ID: 86,
    Name: "387. First Unique Character in a String.cpp",
    Content:
      "class Solution {\r\npublic:\r\n    int firstUniqChar(string s) {\r\n//         map\u003cchar, int\u003e cache;\r\n        \r\n//         for(auto \u0026\u0026 x : s){\r\n//             cache[x]++;\r\n//         }\r\n        \r\n//         for(auto \u0026\u0026 x : s){\r\n//             if(cache[x] == 1){\r\n//                 return distance(s.begin(), find(s.begin(), s.end(), x));\r\n//             }\r\n//         }\r\n//         return -1;\r\n        \r\n        // -1 indicates that there are no occurences of char.\r\n        int count_chars[26] = {[0 ... 25] = -1};\r\n        for (int i=0; i\u003cs.size(); i++) {\r\n            char c = s[i];\r\n            int val = count_chars[s[i] - 'a'];\r\n            if (val == -1) count_chars[c - 'a'] = i;\r\n            // -2 indicates that there are more than one occurence of char.\r\n            else if (val != -2) count_chars[c - 'a'] = -2;\r\n        }\r\n        int return_index = INT_MAX;\r\n        for (int i=0; i\u003c26; i++) {\r\n            if (count_chars[i] \u003e= 0) {\r\n                // Get the lowest index for a char that occurs only once.\r\n                return_index = min(return_index, count_chars[i]);\r\n            }\r\n        }\r\n        if (return_index != INT_MAX) return return_index;\r\n        return -1;\r\n    }\r\n        \r\n    }\r\n};\r\n",
  },
  {
    ID: 87,
    Name: "395. Longest Substring with At Least K Repeating Characters.cpp",
    Content:
      "class Solution {\r\npublic:\r\nint f(string \u0026s, int lo, int hi, int k){\r\n        if(hi-lo \u003c k){\r\n            return 0;\r\n        }\r\n        vector\u003cint\u003e count(26);\r\n        for(int i = lo; i\u003c hi; i++){\r\n            count[s[i]-'a']++;\r\n        }\r\n        for(int i = lo; i \u003c hi; i++){\r\n            if(count[s[i]-'a'] \u003c k ){\r\n                int j = i+1;\r\n​\r\n                while(j\u003chi \u0026\u0026 count[s[j] -'a'] \u003c k){\r\n                    j++;\r\n                }\r\n                return max( f(s, lo, i, k), f(s, j, hi, k) );\r\n            }\r\n        }\r\n        return hi-lo;\r\n}\r\n    \r\n    int longestSubstring(string s, int k) {\r\n        \r\n        return f(s, 0, s.length(), k);\r\n    }\r\n};\r\n",
  },
  {
    ID: 88,
    Name: "4. Median of Two Sorted Arrays.java",
    Content:
      "class Solution {\r\n    public double findMedianSortedArrays(int[] a, int[] b) {\r\n       int n = a.length;\r\n        int m = b.length;\r\n        int i = 0, j = 0, k = 0;\r\n        \r\n        int[] combo = new int[n+m];\r\n        // feed all elems into ONE\r\n        while(i \u003c n \u0026\u0026 j \u003c m) {\r\n            combo[k++] = (a[i] \u003e b[j]) ? b[j++] : a[i++];\r\n        }\r\n        // if any elem left in a[]\r\n        while(i \u003c n) {\r\n            combo[k++] = a[i++];\r\n        }\r\n        // if any elem left in b[]\r\n        while(j \u003c m)\r\n            combo[k++] = b[j++];\r\n        \r\n        int hf = (int) ((n + m) / 2);\r\n​\r\n        if (combo.length % 2 == 0) {\r\n            // if even\r\n            return (double) (combo[hf - 1] + combo[hf]) / 2;\r\n        }\r\n        return (double) combo[hf] ;\r\n    }\r\n}\r\n",
  },
  {
    ID: 89,
    Name: "412. Fizz Buzz.cpp",
    Content:
      'class Solution {\r\npublic:\r\n    vector\u003cstring\u003e fizzBuzz(int n) {\r\n        vector\u003cstring\u003e ans ;\r\n        \r\n        for(int i = 1; i \u003c n + 1; i++){\r\n            if(i % 3 == 0 \u0026\u0026 (i % 5 != 0) ){\r\n                ans.push_back("Fizz");\r\n            }else if(i % 5 == 0 \u0026\u0026 (i % 3 != 0)){\r\n                ans.push_back("Buzz");\r\n            }else if (i % 15 == 0) {\r\n                ans.push_back("FizzBuzz");\r\n            }else{\r\n                ans.push_back(to_string(i));\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n};\r\n',
  },
  {
    ID: 90,
    Name: "416. Partition Equal Subset Sum.cpp",
    Content:
      "class Solution {\r\npublic:\r\n    bool canPartition(vector\u003cint\u003e\u0026 nums) {\r\n         int sum = (int) accumulate(nums.begin(), nums.end(),0);\r\n        if(sum\u00261){\r\n            return false;\r\n        }else {\r\n            sum = (int) sum/2;\r\n            vector\u003cbool\u003e dp(sum+1);\r\n            dp[0] = true;\r\n            for(auto \u0026\u0026x : nums) {\r\n                // if sumX is present that means sumX-(something) also present\r\n                for(int i = sum; i \u003e= x; i--){\r\n                    dp[i] = dp[i] || dp[i-x] ;\r\n                }\r\n            }\r\n            // debug() \u003c\u003c imie(dp);\r\n            return dp.back();\r\n        }   \r\n    }\r\n};\r\n",
  },
  {
    ID: 91,
    Name: "419. Battleships in a Board.cpp",
    Content:
      "class Solution {\r\npublic:\r\n    \r\nvoid f(vector\u003cvector\u003cchar\u003e\u003e \u0026board, int row, int col) {\r\n    if(row \u003c 0 || col \u003c 0 || row \u003e= board.size() || col \u003e= board[row].size() || board[row][col] != 'X' ) {\r\n        return ;\r\n    }\r\n    \r\n    board[row][col] = '.';\r\n    f(board, row+1, col);\r\n    f(board, row-1, col);\r\n    f(board, row, col+1);\r\n    f(board, row, col-1);\r\n    \r\n    return ;\r\n}\r\n    \r\n    int countBattleships(vector\u003cvector\u003cchar\u003e\u003e\u0026 board) {\r\n        int ans = 0;\r\n        for(int row = 0; row \u003c (int) board.size(); row++) {\r\n            for(int col = 0; col \u003c (int) board[row].size(); col++) {\r\n                if(board[row][col] == 'X') {\r\n                    ans++;\r\n                    f(board, row, col);\r\n                }\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n};\r\n",
  },
  {
    ID: 92,
    Name: "451. Sort Characters By Frequency.java",
    Content:
      "class Solution {\r\n    public String frequencySort(String s) {\r\n        HashMap\u003cCharacter, Integer\u003e hashMap = new HashMap\u003c\u003e();\r\n        char[] carr = s.toCharArray();\r\n        for (Character x : carr) {\r\n            hashMap.put(x, hashMap.getOrDefault(x, 0)+1);\r\n        }\r\n        PriorityQueue\u003cCharacter\u003e maxheap = new PriorityQueue\u003c\u003e((a, b) -\u003e hashMap.get(b) - hashMap.get(a));\r\n        maxheap.addAll(hashMap.keySet());\r\n        StringBuilder answer = new StringBuilder();\r\n        while(!maxheap.isEmpty()) {\r\n            char curr = maxheap.remove();\r\n            for (int i = 1; i \u003c hashMap.get(curr)+1; i++) {\r\n                answer.append(curr);\r\n            }\r\n        }\r\n        return answer.toString();\r\n    }\r\n}\r\n",
  },
  {
    ID: 93,
    Name: "46. Permutations.py",
    Content:
      "class Solution:\r\n    def permute(self, nums: List[int]) -\u003e List[List[int]]:\r\n        from itertools import permutations\r\n        return list(permutations(nums))\r\n",
  },
  {
    ID: 94,
    Name: "496. Next Greater Element I.java",
    Content:
      "class Solution {\r\n    public int[] nextGreaterElement(int[] nums1, int[] nums2) {\r\n        int[] nextGreaterElems = findNextGreaterElems(nums2);\r\n        HashMap\u003cInteger,Integer\u003e cache = new HashMap\u003c\u003e();\r\n        for(int i = 0; i \u003c nums2.length; i++){\r\n            cache.put( nums2[i], nextGreaterElems[i] );\r\n        }\r\n        int[] ans = new int[nums1.length];\r\n        for(int i = 0; i \u003c nums1.length; i++){\r\n            ans[i] = cache.get(nums1[i]);\r\n        }\r\n        return ans;\r\n    }\r\n    \r\n    private static int[] findNextGreaterElems(int[] arr){\r\n        Stack\u003cInteger\u003e stack = new Stack\u003c\u003e();\r\n        int n = arr.length;\r\n        /**\r\n           traverse korbo backward ar ans[] te rightside \r\n           ...er big elem store korbo!\r\n           ---\r\n           [4,1,2] ~\u003e -1  2 -1\r\n        */\r\n        int[] elems = new int[n];\r\n        for(int i = n - 1; i \u003e= 0; i--) {\r\n            while(stack.isEmpty()==false \u0026\u0026 stack.peek() \u003c arr[i]) stack.pop();\r\n            elems[i] = stack.isEmpty() ? -1 : stack.peek();\r\n            stack.add(arr[i]);\r\n        }\r\n        return elems;\r\n    }\r\n}\r\n",
  },
  {
    ID: 95,
    Name: "5. Longest Palindromic Substring.cpp",
    Content:
      "class Solution {\r\npublic:\r\n    string longestPalindrome(string s) {\r\n        int start = 0;\r\n        if (s.empty()) {\r\n            return nullptr;\r\n        }\r\n        if (s.length() == 1) {\r\n            return s;\r\n        }\r\n        int maxlen = 1;\r\n        int n = (int) s.length();\r\n        for (int i = 0; i \u003c n-1; i++) {\r\n            int l = i, r = i;\r\n            while (l \u003e= 0 \u0026\u0026 r \u003c n) {\r\n                if (s[l]==s[r]) {\r\n                    l--, r++;\r\n                }else {\r\n                    break;\r\n                }\r\n            }\r\n            int len = r-l-1;\r\n            if (maxlen \u003c len) {\r\n                maxlen = len;\r\n                start = l+1;\r\n            }\r\n        }\r\n        for (int i = 0; i \u003c n-1; i++) {\r\n            int l = i, r = i+1;\r\n            while (l \u003e= 0 \u0026\u0026 r \u003c n) {\r\n                if (s[l]==s[r]) {\r\n                    l--, r++;\r\n                }else {\r\n                    break;\r\n                }\r\n            }\r\n            int len = r-l-1;\r\n            if (maxlen \u003c len) {\r\n                maxlen = len;\r\n                start = l+1;\r\n            }\r\n        }\r\n​\r\n        return s.substr(start, maxlen);\r\n    }\r\n};\r\n",
  },
  {
    ID: 96,
    Name: "50. Pow(x, n).cpp",
    Content:
      "class Solution {\r\npublic:\r\n    double myPow(double x, int n) {\r\n        return pow(x, n)   ;\r\n    }\r\n};\r\n",
  },
  {
    ID: 97,
    Name: "518. Coin Change 2.java",
    Content:
      "class Solution {\r\n    public int change(int amount, int[] coins) {\r\n        int n = coins.length;\r\n        int[] dp = new int[amount + 1];\r\n        dp[0] = 1;\r\n        \r\n        for (int coin : coins) {\r\n            for (int i = 1; i \u003c= amount; i++) {\r\n                if (i \u003e= coin) {\r\n                    dp[i] += dp[i - coin];\r\n                }\r\n            }\r\n        }\r\n        \r\n        return dp[amount];\r\n    }\r\n}\r\n",
  },
  {
    ID: 98,
    Name: "53. Maximum Subarray.cpp",
    Content:
      "using arr = vector\u003cint\u003e;\r\nconst int inf = 2e9+18;\r\nint maxx = -1 * inf;\r\nclass Solution {\r\npublic:\r\n    int maxSubArray(vector\u003cint\u003e\u0026 nums) {\r\n        int n = nums.size() ;\r\n        arr dp(n);\r\n        dp[0] = nums[0];\r\n        maxx = dp[0];\r\n        for(int i = 1; i \u003c n; i++){\r\n            if(dp[i-1] + nums[i] \u003e nums[i]){\r\n                dp[i] = dp[i-1] + nums[i];\r\n            }else{\r\n                dp[i] = nums[i];\r\n            }\r\n            maxx = max(dp[i],maxx);\r\n        }\r\n        return maxx;\r\n    }\r\n};\r\n",
  },
  {
    ID: 99,
    Name: "54. Spiral Matrix.cpp",
    Content:
      "class Solution {\r\npublic:\r\n    vector\u003cint\u003e spiralOrder(vector\u003cvector\u003cint\u003e\u003e\u0026 matrix) {\r\n       vector\u003cint\u003e rez;\r\n      \r\n        if(matrix.empty()) {\r\n        return rez;\r\n       }\r\n        \r\n      int l=0,r=matrix[0].size(),t=0,b = matrix.size(); \r\n      \r\n      while(l\u003cr \u0026\u0026 t\u003cb){\r\n        for(int i = l;i\u003cr;i++) rez.push_back(matrix[t][i]);   // move from left to right\r\n        t++;\r\n        if(t==b) break;\r\n        for(int i = t;i\u003cb;i++) rez.push_back(matrix[i][r-1]);   // move from top to bottom\r\n        r--;\r\n        if(l==r) break;\r\n        for(int i = r-1;i\u003e=l;i--) rez.push_back(matrix[b-1][i]);     // move from right to left\r\n        b--;\r\n        if(t==b) break;\r\n        for(int i = b-1;i\u003e=t;i--) rez.push_back(matrix[i][l]);     //move from bottom to top\r\n        l++;\r\n      }\r\n      return rez;\r\n    }\r\n};\r\n",
  },
  {
    ID: 100,
    Name: "55. Jump Game.cpp",
    Content:
      "class Solution {\r\npublic:\r\n    bool canJump(vector\u003cint\u003e\u0026 nums) {\r\n        int len = nums.size();\r\n        int maxjp = 0;\r\n        for(int i = 0; i \u003c= maxjp; i++){\r\n            maxjp = max(maxjp, i+nums[i]);\r\n            if(maxjp \u003e= len-1){\r\n                return true;\r\n            }\r\n        }\r\n        return false;\r\n    }\r\n};\r\n",
  },
  {
    ID: 101,
    Name: "594. Longest Harmonious Subsequence.cpp",
    Content:
      "class Solution {\r\npublic:\r\n    int findLHS(vector\u003cint\u003e\u0026 nums) {\r\n        sort(nums.begin(), nums.end());\r\n        int left = 0, right = 1, ans=0;\r\n        while(right \u003c (int) nums.size()) {\r\n            int diff = nums[right]-nums[left];\r\n            if(diff == 1) {\r\n                ans = max(ans, right-left+1);\r\n            }\r\n            // 2 2 3\r\n            if(diff \u003c= 1) {right++;}else{left++;}\r\n        }\r\n        return ans;\r\n    }\r\n};\r\n",
  },
  {
    ID: 102,
    Name: "6. ZigZag Conversion.py",
    Content:
      "class Solution:\r\n    def convert(self, s: str, numRows: int) -\u003e str:\r\n        if numRows \u003c= 1:\r\n            return s\r\n        \r\n        rows = [[] for i in range(numRows)]\r\n        currow = 0\r\n        delta  = -1\r\n        for ch in s:\r\n            rows[currow].append(ch)\r\n            if (currow == 0 or currow == (numRows - 1)):\r\n                delta = delta * -1\r\n            currow += delta\r\n            \r\n        for i in range(len(rows)):\r\n            rows[i] = ''.join(rows[i])\r\n            \r\n        return ''.join(rows)\r\n    \r\n        \r\n",
  },
  {
    ID: 103,
    Name: "605. Can Place Flowers.cpp",
    Content:
      "class Solution {\r\npublic:\r\n    bool canPlaceFlowers(vector\u003cint\u003e\u0026 fruits, int n) {\r\n        int l = (int) fruits.size();\r\n        int count=0;\r\n        for(int i = 0; i \u003c l; i++) {\r\n           if(fruits[i] == 0) {\r\n                int prev= (i==0 || fruits[i-1] == 0) ? 0 : 1 ;\r\n                int next= (i==l-1 || fruits[i+1] == 0) ? 0 : 1 ;\r\n                if(prev==0 \u0026\u0026 next==0) {\r\n                    fruits[i]=1;\r\n                    count++;\r\n                }\r\n           }\r\n        }\r\n        return (count \u003e= n);\r\n    }\r\n};\r\n",
  },
  {
    ID: 104,
    Name: "621. Task Scheduler.cpp",
    Content:
      "class Solution {\r\npublic:\r\n    int leastInterval(vector\u003cchar\u003e\u0026 tasks, int n) {\r\n        map\u003cchar, int\u003e  cache ;\r\n        for (char x : tasks)\r\n            cache[x]++;\r\n        \r\n        priority_queue\u003cint\u003e pq;\r\n        for (pair\u003cint, int\u003e v : cache)\r\n            pq.push(v.second);\r\n        \r\n        int cycles = 0;\r\n        while (!pq.empty()) {\r\n            vector\u003cint\u003e temp; // ith clock cycle in CPU\r\n            for (int cooler = 0; cooler \u003c n + 1; cooler++) {\r\n                if (!pq.empty()){\r\n                    temp.push_back(pq.top());\r\n                    pq.pop();    \r\n                }\r\n            }\r\n            // run again for any task occurs more \u003e 1\r\n            for (int task : temp) {\r\n                if(--task \u003e 0) {\r\n                    pq.push(task);\r\n                }\r\n            }\r\n            \r\n            cycles += (pq.empty()) ? temp.size() : n+1 ;\r\n        }\r\n        \r\n        return cycles;\r\n    }\r\n};\r\n",
  },
  {
    ID: 105,
    Name: "630. Course Schedule III.java",
    Content:
      "class Solution {\r\n    /*\r\n    \r\n    This is one of the correct solution as of my 1st intution to approch the problem\r\n    however; it's getting `TLE`; which is obious.\r\n    ---\r\n    \r\n    \r\n    public int scheduleCourse(int[][] courseee) {\r\n        Arrays.sort(courseee, (a, b) -\u003e b[1] \u003c a[1] ? 1 : -1);\r\n        return f(courseee, 0, 0);\r\n    }\r\n​\r\n    private int f(int[][] courses, int curIndex, int timeSpend){\r\n        if(curIndex == courses.length) return 0;\r\n​\r\n        int[] course = courses[curIndex];\r\n        int alreadyDone = 0;\r\n        if(timeSpend + course[0] \u003c= course[1])\r\n            alreadyDone = 1 + f(courses, curIndex+1, timeSpend + course[0]);\r\n​\r\n        // if we don't take up that course\r\n        int otherMax = f(courses, curIndex+1, timeSpend);\r\n        return Math.max(otherMax, alreadyDone);\r\n    }\r\n    */\r\n    \r\n    class Course {\r\n        int duration;\r\n        int lastDay;\r\n        Course(int d, int l){\r\n            this.duration = d;\r\n            this.lastDay = l;\r\n        }\r\n    }\r\n    public int scheduleCourse(int[][] courseee) {\r\n    Comparator\u003cCourse\u003e comp = (a, b) -\u003e a.lastDay - b.lastDay;\r\n        PriorityQueue\u003cCourse\u003e courses = new PriorityQueue\u003cCourse\u003e(courseee.length + 1, comp);\r\n        for(int[] c : courseee) {\r\n            courses.add(new Course(c[0], c[1]));\r\n        }\r\n        PriorityQueue\u003cInteger\u003e alreadyTaken = new PriorityQueue\u003c\u003e((a, b) -\u003e (b-a));\r\n        int time = 0;\r\n        for(Course course : courses) {\r\n            if(time+course.duration \u003c= course.lastDay) {\r\n                alreadyTaken.add(course.duration);\r\n                time += course.duration;\r\n            } else {\r\n                if (alreadyTaken.isEmpty()==false \u0026\u0026 alreadyTaken.peek() \u003e course.duration) {\r\n                    int x = alreadyTaken.poll();\r\n    time -= x;\r\n                    time += course.duration;\r\n                    alreadyTaken.add(course.duration);\r\n                }\r\n            }\r\n        }\r\n        return alreadyTaken.size();\r\n    }\r\n}\r\n",
  },
  {
    ID: 106,
    Name: "637. Average of Levels in Binary Tree.js",
    Content:
      "/**\r\n * Definition for a binary tree node.\r\n * function TreeNode(val, left, right) {\r\n *     this.val = (val===undefined ? 0 : val)\r\n *     this.left = (left===undefined ? null : left)\r\n *     this.right = (right===undefined ? null : right)\r\n * }\r\n */\r\n/**\r\n * @param {TreeNode} root\r\n * @return {number[][]}\r\n */\r\nvar averageOfLevels = function (root) {\r\n  let result = [];\r\n​\r\n  const dfs = (root, level) =\u003e {\r\n    if (!root) return;\r\n​\r\n    dfs(root.left, level + 1);\r\n​\r\n    if (result[level]) {\r\n      result[level].push(root.val);\r\n    } else {\r\n      result[level] = [root.val];\r\n    }\r\n​\r\n    dfs(root.right, level + 1);\r\n  };\r\n​\r\n  dfs(root, 0);\r\n​\r\n  let avgs = result.map((arr, index) =\u003e {\r\n    let sum = 0;\r\n    arr.forEach((x) =\u003e (sum += x));\r\n    return sum / arr.length;\r\n  });\r\n  return avgs;\r\n};\r\n​\r\n",
  },
  {
    ID: 107,
    Name: "64. Minimum Path Sum.cpp",
    Content:
      "const int inf = 0x3f3f3f3f;\r\nclass Solution {\r\npublic:\r\n    int minPathSum(vector\u003cvector\u003cint\u003e\u003e\u0026 grid) {\r\n        int H = grid.size(),\r\n            W = grid[0].size();\r\n        \r\n        vector\u003cvector\u003cint\u003e\u003e dp(H, vector\u003cint\u003e(W, inf));\r\n        for(int row = 0; row \u003c H; row++){\r\n            for(int col = 0; col \u003c W; col++) {\r\n                if(row == 0 \u0026\u0026 col == 0) {\r\n                    dp[row][col] = grid[row][col];\r\n                }else {\r\n                    dp[row][col] = grid[row][col] + min(( (row == 0) ? inf : dp[row-1][col]), ((col == 0) ? inf : dp[row][col-1]));   \r\n                }\r\n            }\r\n        }\r\n        \r\n        return dp[H-1][W-1];\r\n    }\r\n};\r\n",
  },
  {
    ID: 108,
    Name: "66. Plus One.cpp",
    Content:
      "class Solution {\r\npublic:\r\n    vector\u003cint\u003e plusOne(vector\u003cint\u003e\u0026 digits) {\r\n       int n = digits.size();\r\n        for(int i = n - 1; i \u003e= 0; i--) {\r\n            if(digits[i] \u003c 9){\r\n                digits[i]++;\r\n                return digits;\r\n            }\r\n            \r\n            digits[i] = 0;\r\n        }\r\n        vector\u003cint\u003e nn(n + 1);\r\n        nn[0] = 1;\r\n        return nn;\r\n    }\r\n};\r\n​\r\n//1 2 3 9 9 9\r\n \r\n",
  },
  {
    ID: 109,
    Name: "669. Trim a Binary Search Tree.cpp",
    Content:
      "/**\r\n * Definition for a binary tree node.\r\n * struct TreeNode {\r\n *     int val;\r\n *     TreeNode *left;\r\n *     TreeNode *right;\r\n *     TreeNode() : val(0), left(nullptr), right(nullptr) {}\r\n *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\r\n *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\r\n * };\r\n */\r\nclass Solution {\r\npublic:\r\n    TreeNode* trimBST(TreeNode* root, int low, int high) {\r\n        if (root==NULL) {return NULL;}\r\n        if(root-\u003eval \u003c low)    {\r\n            return trimBST(root-\u003eright, low, high);\r\n        }\r\n        else if (root-\u003eval \u003e high) {\r\n            return trimBST(root-\u003eleft, low, high);\r\n        }\r\n        else {\r\n            root-\u003eleft = trimBST(root-\u003eleft, low, high);\r\n            root-\u003eright = trimBST(root-\u003eright, low, high);\r\n            return root;\r\n        }\r\n    }\r\n};\r\n",
  },
  {
    ID: 110,
    Name: "69. Sqrt(x).py",
    Content:
      "class Solution:\r\n    def mySqrt(self, x: int) -\u003e int:\r\n        \r\n        left, right = 0,  x\r\n        while left \u003c= right:\r\n            mid = left + (right - left) // 2\r\n​\r\n            if mid * mid \u003e x:\r\n                right = mid - 1\r\n            elif mid * mid \u003c x:\r\n                left = mid + 1\r\n            else:\r\n                return mid\r\n​\r\n        # left \u003e right\r\n        return right\r\n",
  },
  {
    ID: 111,
    Name: "695. Max Area of Island.cpp",
    Content:
      "class Solution {\r\n    int H,W;\r\n    vector\u003cvector\u003cint\u003e\u003e grid;\r\n    int dfs(int row, int col) {\r\n        if((row \u003c 0 || row \u003e= H )|| (col \u003c 0 || col \u003e= W) || grid[row][col]==0) {\r\n            return 0;\r\n        }\r\n        grid[row][col]=0;\r\n​\r\n        int count = 1;\r\n        count += dfs(row+1,col) + dfs(row-1,col) + dfs(row,col+1) + dfs(row,col-1);\r\n        return count;\r\n    };\r\n​\r\npublic:\r\n    int maxAreaOfIsland(vector\u003cvector\u003cint\u003e\u003e\u0026 matrix) {\r\n        grid = matrix;\r\n        H = matrix.size(), W = matrix[0].size();\r\n        int maxarea = 0;\r\n        for (int row = 0; row \u003c H; row++) {\r\n            for (int col = 0; col \u003c W; col++) {\r\n                if (grid[row][col]) {\r\n                    maxarea = max(maxarea, dfs(row, col));\r\n                }\r\n            }\r\n        }\r\n        return maxarea;\r\n    }\r\n};\r\n",
  },
  {
    ID: 112,
    Name: "7. Reverse Integer.cpp",
    Content:
      "class Solution {\r\npublic:\r\n    int reverse(int x) {\r\n        int ret = 0;\r\n        int last_digit = 0;\r\n        while(true) {\r\n            last_digit = x % 10;\r\n            ret = ret + last_digit;\r\n            x = x/10;\r\n            if (x == 0) break;\r\n            else {\r\n                if (ret \u003e INT_MAX/10 || ret \u003c INT_MIN/10) return 0;\r\n                ret = ret * 10;\r\n            }\r\n        }\r\n        return ret;   \r\n    }\r\n};\r\n",
  },
  {
    ID: 113,
    Name: "70. Climbing Stairs.cpp",
    Content:
      "class Solution {\r\n    private:\r\n    int memo[46] = {-1};\r\npublic:\r\n    Solution() { memo[0] = memo[1] = 1 ; }\r\n    int climbStairs(int n) {\r\n        if(n \u003c= 1){\r\n            return 1;\r\n        }\r\n        if(memo[n]){ return memo[n] ; }\r\n        return memo[n] = climbStairs(n - 1) + climbStairs(n - 2);\r\n    }\r\n};\r\n",
  },
  {
    ID: 114,
    Name: "700. Search in a Binary Search Tree.js",
    Content:
      "/**\r\n * Definition for a binary tree node.\r\n * function TreeNode(val, left, right) {\r\n *     this.val = (val===undefined ? 0 : val)\r\n *     this.left = (left===undefined ? null : left)\r\n *     this.right = (right===undefined ? null : right)\r\n * }\r\n */\r\n/**\r\n * @param {TreeNode} root\r\n * @return {number[][]}\r\n */\r\nvar searchBST = function (root, val) {\r\n  if (!root) {\r\n    return null;\r\n  }\r\n​\r\n  if (root.val == val) {\r\n    return root;\r\n  }\r\n​\r\n  if (val \u003c root.val) {\r\n    return searchBST(root.left, val);\r\n  } else {\r\n    return searchBST(root.right, val);\r\n  }\r\n};\r\n​\r\n",
  },
  {
    ID: 115,
    Name: "74. Search a 2D Matrix.java",
    Content:
      "class Solution {\r\n    public boolean searchMatrix(int[][] matrix, int target) {\r\n        /*\r\n         * STEP 1: Find potential Row\r\n         * STEP 2: Find pos of Target  \r\n         */\r\n​\r\n        int potentialRow = findPotentialRow(matrix, target);\r\n        if (potentialRow == -1) return false ;\r\n        boolean isFound = findTarget(matrix[potentialRow], target);\r\n        return isFound ;\r\n    }\r\n    private int findPotentialRow(int[][] matrix, int target) {\r\n        int lo = 0;\r\n        int hi = matrix.length - 1;\r\n        int C = matrix[0].length - 1;\r\n​\r\n        while(lo \u003c= hi) {\r\n            int mid = (lo + hi) / 2;\r\n            if (matrix[mid][0] \u003c= target \u0026\u0026 target \u003c= matrix[mid][C]) return mid;\r\n            else if (matrix[mid][0] \u003e target) hi = mid - 1;\r\n            else if (matrix[mid][0] \u003c target) lo = mid + 1;\r\n        }\r\n        return -1;\r\n    }\r\n​\r\n    private boolean findTarget(int[] matrix , int target) {\r\n        int lo = 0;\r\n        int hi = matrix.length - 1;\r\n        while (lo \u003c= hi) {\r\n            int mid = (lo + hi) / 2;\r\n            if (matrix[mid] == target) return true;\r\n            else if (matrix[mid] \u003e target) hi = mid - 1;\r\n            else if (matrix[mid] \u003c target) lo = mid + 1;\r\n        }\r\n        return false;\r\n    }\r\n}\r\n",
  },
  {
    ID: 116,
    Name: "745. Prefix and Suffix Search.java",
    Content:
      'class WordFilter {\r\n    private HashMap\u003cString, Integer\u003e cache =  new HashMap\u003c\u003e();\r\n    /**\r\n     * For a word like "test", consider "#test", "t#test", "st#test", "est#test",\r\n     * "test#test". Then if we have a query like prefix = "te", suffix = "t", we can\r\n     * find it by searching for something we\'ve inserted starting with "t#te".\r\n     */\r\n    \r\n    public WordFilter(String[] words) {\r\n        String salt = "$@"; int wordIdx = 0;\r\n        for (int i = 0; i \u003c words.length; i++) {\r\n            for (int j = 0; j \u003c words[i].length(); j++) {\r\n                for (int k = 0; k \u003c words[i].length(); k++) {\r\n                    String key = words[i].substring(0, j+1) + salt + words[i].substring(k);\r\n                    cache.put(key, i);\r\n                }\r\n            }\r\n        }\r\n    }\r\n    \r\n    public int f(String prefix, String suffix) {\r\n        String key = prefix+"$@"+suffix;\r\n        return cache.getOrDefault(key, -1);\r\n    }\r\n}\r\n​\r\n/**\r\n * Your WordFilter object will be instantiated and called as such:\r\n * WordFilter obj = new WordFilter(words);\r\n * int param_1 = obj.f(prefix,suffix);\r\n */\r\n',
  },
  {
    ID: 117,
    Name: "75. Sort Colors.java",
    Content:
      "class Solution {\r\n    public void sortColors(int[] nums) {\r\n        int zero = 0, one = 0;\r\n        for (int x : nums){\r\n            if(x == 0) zero++;\r\n            if(x == 1) one++;\r\n        }\r\n        int i = 0;\r\n        while(zero-- \u003e 0)\r\n            nums[i++] = 0;\r\n        while(one-- \u003e 0)\r\n            nums[i++] = 1;\r\n        while(i \u003c nums.length)\r\n            nums[i++] = 2;\r\n    }\r\n}\r\n",
  },
  {
    ID: 118,
    Name: "754. Reach a Number.cpp",
    Content:
      "class Solution {\r\npublic:\r\n    int reachNumber(int n) {\r\n        n = abs(n);\r\n​\r\n        int sum = 0, steps = 0;\r\n        while(sum \u003c n) {sum+=(steps++);}\r\n        while ((sum-n) % 2 == 1) {\r\n            sum+= (steps++);\r\n        }\r\n        return steps-1;\r\n    }\r\n};\r\n",
  },
  {
    ID: 119,
    Name: "77. Combinations.cpp",
    Content:
      "class Solution {\r\npublic:\r\n    void dfs( vector\u003cvector\u003cint\u003e\u003e\u0026 subsets,\r\n    int index, int n, int k, vector\u003cint\u003e currrent) {\r\n        if((int) currrent.size() == k) {\r\n            subsets.push_back(currrent);\r\n            return;\r\n        }\r\n        for(int i = index; i \u003c n+1; i++) {\r\n            currrent.push_back(i);\r\n            dfs(subsets, i+1, n, k, currrent);\r\n            currrent.pop_back();\r\n        }\r\n    }\r\n    \r\n    vector\u003cvector\u003cint\u003e\u003e combine(int n, int k) {\r\n      vector\u003cvector\u003cint\u003e\u003e subsets;\r\n      dfs(subsets, 1, n, k, vector\u003cint\u003e());\r\n      return subsets;\r\n    }\r\n};\r\n",
  },
  {
    ID: 120,
    Name: "78. Subsets.cpp",
    Content:
      "class Solution {\r\npublic:\r\n    \r\n    void dfs(vector\u003cvector\u003cint\u003e\u003e \u0026subsets, vector\u003cint\u003e \u0026nums, int index, vector\u003cint\u003e current){\r\n​\r\n        subsets.push_back(current);\r\n        for(int i = index; i \u003c nums.size(); i++){\r\n            current.push_back(nums[i]);\r\n            dfs(subsets, nums, i+1, current);\r\n            current.pop_back();\r\n        }\r\n    }\r\n    \r\n    vector\u003cvector\u003cint\u003e\u003e subsets(vector\u003cint\u003e\u0026 nums) {\r\n        vector\u003cvector\u003cint\u003e\u003e subsets;\r\n        dfs(subsets, nums, 0, vector\u003cint\u003e());\r\n        return subsets;\r\n    }\r\n};\r\n",
  },
  {
    ID: 121,
    Name: "79. Word Search.cpp",
    Content:
      "class Solution {\r\npublic:\r\n    \r\nbool dfs(vector\u003cvector\u003cchar\u003e\u003e \u0026board, int row, int col, string \u0026word, int wc)\r\n{\r\n    if(wc == (int) word.length()){\r\n        return true;\r\n    }\r\n    if(row \u003c 0 or row \u003e= board.size() or col \u003c 0 or col \u003e= board[row].size() or board[row][col] != word[wc])\r\n    {\r\n        return false;\r\n    }\r\n    {\r\n        char temp = board[row][col];\r\n        board[row][col] = ' ';\r\n        bool found = (dfs(board, row+1, col, word, wc+1) || dfs(board, row-1, col, word, wc+1)\r\n                      || dfs(board, row, col+1, word, wc+1) || dfs(board, row, col-1, word, wc+1));\r\n        board[row][col] = temp;\r\n        return found;\r\n    }\r\n}\r\n​\r\n    \r\n    bool exist(vector\u003cvector\u003cchar\u003e\u003e\u0026 board, string word) {\r\n        \r\n        int M = board.size(), N = board[0].size();\r\n        if(board.empty()){\r\n            return false;\r\n        }\r\n        for(int row = 0; row \u003c M; row++){\r\n            for(int col = 0; col \u003c N; col++){\r\n                if(board[row][col] == word[0] \u0026\u0026 dfs(board, row, col, word, 0)){\r\n                    return true;\r\n",
  },
  {
    ID: 122,
    Name: "80. Remove Duplicates from Sorted Array II.cpp",
    Content:
      "class Solution {\r\npublic:\r\n    int removeDuplicates(vector\u003cint\u003e\u0026 nums) {\r\n        if(nums.empty() || nums.size() \u003c 3) {\r\n            return nums.size();\r\n        }\r\n        int indx = 2;\r\n        for(int i = 2 ; i \u003c (int) nums.size(); i++) {\r\n            if(nums[i] != nums[indx-2]) {\r\n                nums[indx++] = nums[i];\r\n            }\r\n        }\r\n        \r\n        return indx;\r\n    }\r\n};\r\n",
  },
  {
    ID: 123,
    Name: "841. Keys and Rooms.cpp",
    Content:
      "class Solution {\r\npublic:\r\n    bool canVisitAllRooms(vector\u003cvector\u003cint\u003e\u003e\u0026 rooms) {\r\n        set\u003cint\u003e visitedRooms ;\r\n        visitedRooms.insert(0);\r\n​\r\n        stack\u003cint\u003e cacheRooms ;\r\n        cacheRooms.push(0);\r\n        while (cacheRooms.empty()==false) {\r\n            vector\u003cint\u003e roomKeys = rooms[cacheRooms.top()];\r\n            cacheRooms.pop();\r\n            for (int key : roomKeys) {\r\n                if (visitedRooms.count(key)==0) {\r\n                    visitedRooms.insert(key);\r\n                    cacheRooms.push(key);\r\n                }\r\n            }\r\n        }\r\n        return (int) visitedRooms.size() == (int) rooms.size() ;   \r\n    }\r\n};\r\n",
  },
  {
    ID: 124,
    Name: "865. Smallest Subtree with all the Deepest Nodes.cpp",
    Content:
      "/**\r\n * Definition for a binary tree node.\r\n * struct TreeNode {\r\n *     int val;\r\n *     TreeNode *left;\r\n *     TreeNode *right;\r\n *     TreeNode() : val(0), left(nullptr), right(nullptr) {}\r\n *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\r\n *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\r\n * };\r\n */\r\nclass Solution {\r\npublic:\r\n    TreeNode* answer = nullptr; \r\n    int maxDepthNode = -1;\r\n    TreeNode* subtreeWithAllDeepest(TreeNode* root) {\r\n        TreeNode *tmp = root ;\r\n        dfs(tmp,0);\r\n        return answer ;\r\n    }\r\n    \r\n    int dfs(TreeNode* root, int curDepth) {\r\n        if(!root) {\r\n            return curDepth;\r\n        }\r\n        int leftside = dfs(root-\u003eleft, curDepth+1);\r\n        int rightside = dfs(root-\u003eright, curDepth+1);\r\n​\r\n        if(leftside == rightside) {\r\n            maxDepthNode = max(maxDepthNode, leftside);\r\n            if(maxDepthNode == leftside) {\r\n                answer = root;\r\n            }\r\n        }\r\n​\r\n        return max(leftside, rightside);\r\n    }\r\n",
  },
  {
    ID: 125,
    Name: "88. Merge Sorted Array.cpp",
    Content:
      "class Solution {\r\npublic:\r\nvoid merge(vector\u003cint\u003e\u0026 nums1, int m, vector\u003cint\u003e\u0026 nums2, int n) {\r\n    int i=0,j=0,k=0;\r\n    while (j\u003cn \u0026\u0026 i\u003c=(m+n) ){\r\n        if(i\u003e=(m+j)){ \r\n            nums1[i]=nums2[j];\r\n            j++;\r\n        } \r\n        else if(nums1[i]\u003e=nums2[j]) {\r\n            nums1.erase(nums1.begin()+m+k);\r\n            nums1.insert(nums1.begin()+i,nums2[j]);\r\n            j++;\r\n            k++;\r\n        }\r\n        i++;\r\n        }\r\n    }\r\n};\r\n",
  },
  {
    ID: 126,
    Name: "880. Decoded String at Index.java",
    Content:
      "class Solution {\r\n    public String decodeAtIndex(String s, int K) {\r\n          if (s.length()==0) {\r\n            return null;\r\n        }\r\n​\r\n        long size = 0;\r\n        for (char c : s.toCharArray()) {\r\n            if (Character.isDigit(c)) {\r\n                size = size * (c-'0');\r\n            }else {size++ ;}\r\n        }\r\n        System.out.println(\"Size of the string : \" + size);\r\n​\r\n        char[] carray = s.toCharArray();\r\n        for (int index = carray.length-1; index \u003e= 0; index--) {\r\n            char x = carray[index];\r\n            System.out.print(x);\r\n            K %= size;\r\n            if ((K==0 || K==size) \u0026\u0026 Character.isLetter(x)) {\r\n                return Character.toString(x) ;\r\n            } else if (Character.isDigit(x)) {\r\n                size = size / (x-'0');\r\n            } else {\r\n                size-- ;\r\n            }\r\n        }\r\n        return null;\r\n    }\r\n}\r\n",
  },
  {
    ID: 127,
    Name: "897. Increasing Order Search Tree.cpp",
    Content:
      "/**\r\n * Definition for a binary tree node.\r\n * struct TreeNode {\r\n *     int val;\r\n *     TreeNode *left;\r\n *     TreeNode *right;\r\n *     TreeNode() : val(0), left(nullptr), right(nullptr) {}\r\n *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\r\n *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\r\n * };\r\n */\r\nclass Solution {\r\n    vector\u003cTreeNode*\u003e nodes;\r\npublic:\r\n    TreeNode* increasingBST(TreeNode* root) {\r\n        if(root == NULL) {\r\n            return nullptr;\r\n        }\r\n        \r\n        inorder(root);\r\n        \r\n        for(int i = 0; i \u003c (int) nodes.size()-1; i++ ) {\r\n            nodes[i]-\u003eleft = nullptr;\r\n            nodes[i]-\u003eright = nodes[i+1];\r\n        }\r\n        nodes.back()-\u003eleft = nullptr;\r\n        nodes.back()-\u003eright = nullptr;\r\n        \r\n        return nodes[0];\r\n    }\r\n    \r\n    void inorder(TreeNode* root) {\r\n        if(!root) {\r\n            return ;\r\n        }\r\n        inorder(root-\u003eleft);\r\n        nodes.push_back(root);\r\n        inorder(root-\u003eright);\r\n    }\r\n};\r\n",
  },
  {
    ID: 128,
    Name: "90. Subsets II.cpp",
    Content:
      "class Solution {\r\npublic:\r\n    vector\u003cvector\u003cint\u003e\u003e subsetsWithDup(vector\u003cint\u003e\u0026 nums) {\r\n        /*\r\n            * iterative approch exists, but need O(N) extra space\r\n            * n = size of vector\u003cint\u003enums.\r\n        */\r\n        sort(nums.begin(), nums.end());\r\n        vector\u003cvector\u003cint\u003e\u003e subsets;\r\n        dfs(nums, subsets, 0, vector\u003cint\u003e());\r\n        return subsets;\r\n    }\r\n    \r\n    void dfs(vector\u003cint\u003e \u0026nums, vector\u003cvector\u003cint\u003e\u003e \u0026subsets, int index, vector\u003cint\u003e current){\r\n        subsets.push_back(current);\r\n        for(int i = index; i \u003c (int) nums.size(); i++){\r\n            if(index \u003c i \u0026\u0026 nums[i-1] == nums[i]){\r\n                continue;\r\n            }\r\n            current.push_back(nums[i]);\r\n            dfs(nums, subsets, i+1, current);\r\n            current.pop_back();\r\n        }\r\n    }\r\n};\r\n",
  },
  {
    ID: 129,
    Name: "904. Fruit Into Baskets.cpp",
    Content:
      "class Solution {\r\npublic:\r\n    int totalFruit(vector\u003cint\u003e\u0026 trees) {\r\n        if(trees.empty()) {\r\n            return 0;\r\n        }\r\n        int maxfruit = 1;\r\n        unordered_map\u003cint, int\u003e cache;\r\n        int i=0, j=0;\r\n        while(j \u003c (int) trees.size()) {\r\n            if(cache.size() \u003c= 2) {\r\n                cache[trees[j]] = j;\r\n                j++;\r\n            }\r\n            if((int) cache.size() \u003e= 3) {\r\n                int minimum = (int) trees.size() - 1;\r\n                for(auto \u0026\u0026p : cache) {\r\n                    minimum = min(minimum, p.second);\r\n                }\r\n                i = minimum+1;\r\n                cache.erase(trees[minimum]);\r\n            }\r\n            maxfruit = max(maxfruit, j-i);\r\n        }\r\n        return maxfruit;\r\n    }\r\n};\r\n",
  },
  {
    ID: 130,
    Name: "91. Decode Ways.cpp",
    Content:
      "class Solution {\r\n    vector\u003cint\u003e dp;\r\n    int go(string \u0026s, int curindex) {\r\n        if (s[curindex] == '0' ) {\r\n            return 0;\r\n        }\r\n        if (curindex \u003e= s.length()) {\r\n            return 1;\r\n        }\r\n        if (dp[curindex]!=-1){\r\n            return dp[curindex];\r\n        }\r\n        int newWays = go(s, curindex+1);\r\n        if (curindex+2 \u003c= s.length() \u0026\u0026 stoi(s.substr(curindex,2)) \u003c= 26 ) {\r\n            newWays += go(s,curindex+2);\r\n        }\r\n        return dp[curindex] = newWays;\r\n    }\r\n    \r\npublic:\r\n    int numDecodings(string s) {\r\n        dp.resize((int)s.length(), -1);\r\n        return go(s,0);\r\n    }\r\n};\r\n",
  },
  {
    ID: 131,
    Name: "911. Online Election.cpp",
    Content:
      "class TopVotedCandidate {\r\n    map\u003cint, int\u003e vote_count, most_prefered_by_time;\r\npublic:\r\n    TopVotedCandidate(vector\u003cint\u003e\u0026 persons, vector\u003cint\u003e\u0026 times) {\r\n        int max_voted_person = -1;\r\n        for (int i = 0; i \u003c persons.size(); i++) {\r\n            int person = persons[i];\r\n            vote_count[person]++; \r\n            if(max_voted_person \u003c= vote_count[person]) {\r\n                max_voted_person = vote_count[person];\r\n                most_prefered_by_time[times[i]] = person;    \r\n            }\r\n            \r\n        }\r\n    }\r\n    \r\n    int q(int t) {\r\n     auto itr = most_prefered_by_time.lower_bound(t);\r\n       if(itr-\u003efirst != t) {\r\n           itr--;\r\n       }\r\n       return itr-\u003esecond;\r\n    }\r\n};\r\n​\r\n/**\r\n * Your TopVotedCandidate object will be instantiated and called as such:\r\n * TopVotedCandidate* obj = new TopVotedCandidate(persons, times);\r\n * int param_1 = obj-\u003eq(t);\r\n */\r\n",
  },
  {
    ID: 132,
    Name: "941. Valid Mountain Array.cpp",
    Content:
      "class Solution {\r\npublic:\r\n    bool validMountainArray(vector\u003cint\u003e\u0026 arr) {\r\n        if(arr.size() \u003c 3) \r\n        {\r\n            return false;\r\n        }\r\n        int i = 0;\r\n        for(;i \u003c (int) arr.size()-1; i++) \r\n        {\r\n            if(arr[i] \u003e arr[i+1])\r\n            {\r\n                i++;\r\n                break;\r\n            }\r\n            else if (arr[i] == arr[i+1])\r\n            {\r\n                return false;\r\n            }\r\n        }\r\n        if(i \u003c 2) {\r\n            return false;\r\n        }\r\n​\r\n        for(; i \u003c (int) arr.size(); i++) \r\n        {\r\n            if(arr[i-1] \u003c= arr[i]) {\r\n                return false;\r\n            }\r\n        }\r\n​\r\n        return true ;\r\n    }\r\n};\r\n",
  },
  {
    ID: 133,
    Name: "946. Validate Stack Sequences.java",
    Content:
      "class Solution {\r\n    public boolean validateStackSequences(int[] pushed, int[] popped) {\r\n        /*\r\n        * there is no spcl. algo for that, just traverse and use 2-pointer approch\r\n        * and carefully remove the stack.peek() == popped[j] ? stack.pop() : break ;\r\n        * after pushing all elems into stack, now traverse from jth to popped.length\r\n        * similar check for that also!\r\n        */\r\n        int n = pushed.length, j = 0;\r\n        Stack\u003cInteger\u003e stack = new Stack\u003c\u003e();\r\n        for (int i = 0; i \u003c n; i++) {\r\n            int elem = pushed[i];\r\n            stack.add(elem);\r\n            j = removeElemfromStack(popped, j, stack);\r\n        }\r\n        while(j \u003c popped.length) {\r\n            int topelem = stack.peek();\r\n            int popelem = popped[j];\r\n            if (topelem == popelem) { stack.pop(); j++; }\r\n            else { return false; }\r\n        }\r\n        return true;\r\n    }\r\n    private static int removeElemfromStack(int[] popped, int j, Stack\u003cInteger\u003e stack) {\r\n        while(stack.isEmpty()==false) {\r\n            if (stack.peek() == popped[j]) {\r\n                stack.pop();\r\n                j++;\r\n            } else {\r\n                break;\r\n            }\r\n        }\r\n        return j;\r\n    }\r\n}\r\n",
  },
  {
    ID: 134,
    Name: "968. Binary Tree Cameras.cpp",
    Content:
      "/**\r\n * Definition for a binary tree node.\r\n * struct TreeNode {\r\n *     int val;\r\n *     TreeNode *left;\r\n *     TreeNode *right;\r\n *     TreeNode() : val(0), left(nullptr), right(nullptr) {}\r\n *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\r\n *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\r\n * };\r\n */\r\nclass Solution {\r\n    int camera = 0;\r\npublic:\r\n    \r\n    int f(TreeNode* root) {\r\n        if (!root) {\r\n            return 1;\r\n        }\r\n        int lc = f(root-\u003eleft) ;\r\n        int rc = f(root-\u003eright) ;\r\n        if (lc == -1 || rc == -1) {\r\n            camera++;\r\n            return 0;\r\n        }\r\n        if (lc == 0 || rc == 0) {\r\n            return 1;\r\n        }\r\n        return -1;\r\n    }\r\n    \r\n    int minCameraCover(TreeNode* root) {\r\n        if (f(root) == -1) {\r\n            camera++;\r\n        }    \r\n        // f(root);\r\n        return camera;\r\n    }\r\n};\r\n",
  },
  {
    ID: 135,
    Name: "977. Squares of a Sorted Array.cpp",
    Content:
      "class Solution {\r\npublic:\r\n    vector\u003cint\u003e sortedSquares(vector\u003cint\u003e\u0026 nums) {\r\n       /* \r\n         // --\u003e O(NlogN) solution\r\n        for_each(nums.begin(), nums.end(), [\u0026](int \u0026n) {return n = n*n;});\r\n        sort(nums.begin(), nums.end());\r\n        return nums ;\r\n        */\r\n        \r\n        // Quite efficient - O(N) solution\r\n        int n = nums.size() ;\r\n        vector\u003cint\u003e answer(n) ;\r\n        for (int i = 0, j = n-1, k = j; i \u003c= j; k-- ) {\r\n            if( pow(nums[i], 2) \u003e pow(nums[j],2)) {\r\n                answer[k] = nums[i]*nums[i];\r\n                i++ ;\r\n            } else {\r\n                answer[k] = nums[j]*nums[j];\r\n                j-- ;\r\n            }\r\n        }\r\n        return answer ;\r\n    }\r\n};\r\n",
  },
  {
    ID: 136,
    Name: "98. Validate Binary Search Tree.js",
    Content:
      "/**\r\n * Definition for a binary tree node.\r\n * function TreeNode(val, left, right) {\r\n *     this.val = (val===undefined ? 0 : val)\r\n *     this.left = (left===undefined ? null : left)\r\n *     this.right = (right===undefined ? null : right)\r\n * }\r\n */\r\n/**\r\n * @param {TreeNode} root\r\n * @return {boolean}\r\n */\r\nvar isValidBST = function(root) {\r\n    function validateBST (root, start, end) {\r\n        if(!root) {\r\n            return true ;\r\n        }\r\n​\r\n        if(start \u003c root.val \u0026\u0026 root.val \u003c end) {\r\n            return true \u0026\u0026 validateBST(root.left, start, root.val) \u0026\u0026 validateBST(root.right, root.val, end) ;\r\n        }\r\n        return false ;\r\n    }\r\n​\r\n    return validateBST(root, -Infinity, Infinity)\r\n};\r\n",
  },
];
