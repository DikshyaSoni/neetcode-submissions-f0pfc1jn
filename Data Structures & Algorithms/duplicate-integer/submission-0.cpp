class Solution {
public:
    bool hasDuplicate(vector<int>& nums) {
              unordered_set<int> s;

        for (int i = 0; i < nums.size(); i++) {
            if (s.count(nums[i])) {
                return true;   // already seen → duplicate found
            }
            s.insert(nums[i]); // store number
        }

        return false; // no duplicates found
    }
    
};