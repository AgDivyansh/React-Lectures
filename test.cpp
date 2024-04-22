#include <iostream>
#include <map>
#include <unordered_map>
#include <string.h>
using namespace std;
int main()
{
    string order = "cba";
    unordered_map<char, int> m;
    map<char, int> fre;
    string left = "";
    string right = "";
    for (int i = 0; i < order.size(); i++)
    {
        cout << order[i] << " ";
        m[order[i]] = i;
    }
    cout << endl;
    for (auto i : m)
    {
        cout << i.first << " -> " << i.second << endl;
    }
    return 0 ;
}