def max_windowed_range(array, window_size)
    sub_arr = []
    (0...array.length).each do |i|
        (i...array.length).each do |j|
            array = array[i..j]
            subarr << array if array.length == window_size
        end
    end
    max = nil
    sub_arr.each do |ele|
        max = ele.last - ele.first
    end
end