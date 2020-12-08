# ASSESSMENT 5: Ruby Coding Practical Questions

# --------------------1) Create a class called Bike that is initialized with a model, wheels, and a frame size. The default number of wheels is 2. Create a get_info method that returns a sentence with all the data about each bike object.

class Bike
    def initialize (model, wheels, frame_size, bell, speed)
        @model = model
        @wheels = "2 wheels"
        @frame_size = frame_size
        @bell = bell
        @speed = 0
    end

    def get_info
        "The #{ @model } bike has #{ @wheels } and a #{ @frame_size } frame"
    end

# my_bike = Bike.new( "Trek", @wheels, "168cm")
# # Expected output example: 'The Trek bike has 2 wheels and a 168cm frame.'
# p my_bike.get_info

# -------------------2) Add a bell to the bike class and create the ability to ring the bell when the method is called.

    def ring_bell
        'Brrring Brrring!'
    end    

# my_bike = Bike.new( "Trek", @wheels, "168cm", @bell)
# p my_bike.get_info
# # Expected output example: my_bike.ring_bell => 'Ding ding!'
# p my_bike.ring_bell

# -------------------3) Add a speedometer to the Bike class. The speed should be initialized at 0.

# create a method that takes in a num
    def set_speed
        # initialized speed at 0
        speed = 0
    end

# my_bike = Bike.new( "Trek", @wheels, "168cm", @bell, @speed)
# p my_bike.set_speed


# Expected output example: my_bike.speed => 0


# -------------------4) Add the ability to pedal faster. The pedal_faster method should increase the speed by a particular amount.

    def pedal_faster
        # num needs to increase by an amount 
        # must increment the number by a certain amount
        # return the incremented amount
        @speed = @speed + 10
    end
 
# my_bike = Bike.new( "Trek", @wheels, "168cm", @bell, @speed)
# p my_bike.set_speed
# p my_bike.pedal_faster
# Expected output example: my_bike.pedal_faster 10 => 10


# -------------------5) Add the ability to brake. The brake method should decrease the speed by a particular amount. The bike cannot go negative speeds.

    # create a brake method that takes a number
    def brake
        # the speed decreases by a certain amount
        # return the decreased amount
        @speed = @speed - 15
    end
end

my_bike = Bike.new( "Trek", @wheels, "168cm", @bell, @speed)
p my_bike.set_speed
p my_bike.pedal_faster
# this isnt what the output is looking for at -5, even though i initialized the speed at 0.
p my_bike.brake
        


# Expected output example: my_bike.brake 15 => 0
