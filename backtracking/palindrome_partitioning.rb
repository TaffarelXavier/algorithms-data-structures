def partition(s)
  result = []
  partition_helper(s, result, [], 0)
  result
end


def partition_helper(string, result, solution, position)

  if position == string.length
    result << solution.clone unless solution.empty?
  else
    i = position
    while i < string.length do
      substring = string[position..i]
      if substring == substring.reverse
        solution << substring
        partition_helper(string, result, solution, i + 1)
        solution.pop
      end

      i += 1
    end
  end
end

p partition('aabb')
