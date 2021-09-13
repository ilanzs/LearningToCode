print("Rules:\nYou can only play in a 3x3 area but it is not a rigid space like in normal TicTacToe.")
print("The board is a grid starting at the bottom left corner being 1 and the top right corner being 25.")
print("That means that you can't put one of your X's or O's more than 3 spots away from one that is already on the board.")
print("Once you get to the end of a line (the right most part of the line) it will go back to the left and start the next line there.")
print("For example the first line goes 1, 2, 3, 4, 5. And then right on top of the on there is a 6.")
print("First person to get 3 in a row wins.")
print("GOOD LUCK!!!")

theBoard = {'21': ' ', '22': ' ', '23': ' ', '24': ' ', '25': ' ',
            '16': ' ', '17': ' ', '18': ' ', '19': ' ', '20': ' ',
            '11': ' ', '12': ' ', '13': ' ', '14': ' ', '15': ' ',
            '6': ' ', '7': ' ', '8': ' ', '9': ' ', '10': ' ',
            '1': ' ', '2': ' ', '3': ' ', '4': ' ', '5': ' '      }

board_keys = []

for key in theBoard:
    board_keys.append(key)

def printBoard(board):
    print(board['21'] + '|' + board['22'] + '|' + board['23'] + '|' + board['24'] + '|' + board['25'])
    print('-+-+-+-+-')
    print(board['16'] + '|' + board['17'] + '|' + board['18'] + '|' + board['19'] + '|' + board['20'])
    print('-+-+-+-+-')
    print(board['11'] + '|' + board['12'] + '|' + board['13'] + '|' + board['14'] + '|' + board['15'])
    print('-+-+-+-+-')
    print(board['6'] + '|' + board['7'] + '|' + board['8'] + '|' + board['9'] + '|' + board['10'])
    print('-+-+-+-+-')
    print(board['1'] + '|' + board['2'] + '|' + board['3'] + '|' + board['4'] + '|' + board['5'])

# Now we'll write the main function which has all the gameplay functionality.
def game():

    theBoard['13'] = 'X'

    turn = 'O'
    count = 0


    for i in range(9):
        printBoard(theBoard)
        print("It's your turn, " + turn + ". Move to which place?")

        move = input()

        should_continue = True

        if move == '1' or move == '2' or move == '3' or move == '4' or move == '5' or move == '6' or move == '7' or move == '8' or move == '9' or move == '10':
            if theBoard['21'] != ' ' or theBoard['22'] != ' ' or theBoard['23'] != ' ' or theBoard['24'] != ' ' or theBoard['25'] != ' ':
                should_continue = False


        if move == '1' or move == '2' or move == '3' or move == '4' or move == '5':
            if theBoard['16'] != ' ' or theBoard['17'] != ' ' or theBoard['18'] != ' ' or theBoard['19'] != ' ' or theBoard['20'] != ' ':
                should_continue = False


        if move == '25' or move == '24' or move == '23' or move == '22' or move == '21' or move == '20' or move == '19' or move == '18' or move == '17' or move == '16':
            if theBoard['1'] != ' ' or theBoard['2'] != ' ' or theBoard['3'] != ' ' or theBoard['4'] != ' ' or theBoard['5'] != ' ':
                should_continue = False


        if move == '25' or move == '24' or move == '23' or move == '22' or move == '21':
            if theBoard['6'] != ' ' or theBoard['7'] != ' ' or theBoard['8'] != ' ' or theBoard['9'] != ' ' or theBoard['10'] != ' ':
                should_continue = False


        if move == '1' or move == '6' or move == '11' or move == '16' or move == '21' or move == '2' or move == '7' or move == '12' or move == '17' or move == '22':
            if theBoard['5'] != ' ' or theBoard['10'] != ' ' or theBoard['15'] != ' ' or theBoard['20'] != ' ' or theBoard['25'] != ' ':
                should_continue = False


        if move == '1' or move == '6' or move == '11' or move == '16' or move == '21':
            if theBoard['4'] != ' ' or theBoard['9'] != ' ' or theBoard['14'] != ' ' or theBoard['19'] != ' ' or theBoard['24'] != ' ':
                should_continue = False


        if move == '25' or move == '20' or move == '15' or move == '10' or move == '5' or move == '24' or move == '19' or move == '14' or move == '9' or move == '4':
            if theBoard['21'] != ' ' or theBoard['16'] != ' ' or theBoard['11'] != ' ' or theBoard['6'] != ' ' or theBoard['1'] != ' ':
                should_continue = False


        if move == '25' or move == '20' or move == '15' or move == '10' or move == '5':
            if theBoard['22'] != ' ' or theBoard['17'] != ' ' or theBoard['12'] != ' ' or theBoard['7'] != ' ' or theBoard['2'] != ' ':
                should_continue = False


        if should_continue == False:
            print("That place is out of bounds.\nMove to which place?")
            continue

        if theBoard[move] == ' ':
            theBoard[move] = turn
            count += 1
        else:
            print("That place is already filled.\nMove to which place?")
            continue

        # across
        if theBoard['21'] == theBoard['22'] == theBoard['23'] != ' ' or theBoard['22'] == theBoard['23'] == theBoard['24'] != ' ' or theBoard['23'] == theBoard['24'] == theBoard['25'] != ' ':
            print("\nGame Over.\n")
            print(" **** " +turn + " won. ****")
            break
        elif theBoard['16'] == theBoard['17'] == theBoard['18'] != ' ' or theBoard['17'] == theBoard['18'] == theBoard['19'] != ' ' or theBoard['18'] == theBoard['19'] == theBoard['20'] != ' ':
            print("\nGame Over.\n")
            print(" **** " +turn + " won. ****")
            break
        elif theBoard['11'] == theBoard['12'] == theBoard['13'] != ' ' or theBoard['12'] == theBoard['13'] == theBoard['14'] != ' ' or theBoard['13'] == theBoard['14'] == theBoard['15'] != ' ':
            print("\nGame Over.\n")
            print(" **** " +turn + " won. ****")
            break
        elif theBoard['6'] == theBoard['7'] == theBoard['8'] != ' ' or theBoard['7'] == theBoard['8'] == theBoard['9'] != ' ' or theBoard['8'] == theBoard['9'] == theBoard['10'] != ' ':
            print("\nGame Over.\n")
            print(" **** " +turn + " won. ****")
            break
        elif theBoard['1'] == theBoard['2'] == theBoard['3'] != ' ' or theBoard['2'] == theBoard['3'] == theBoard['4'] != ' ' or theBoard['3'] == theBoard['4'] == theBoard['5'] != ' ':
            printBoard(theBoard)
            print("\nGame Over.\n")
            print(" **** " +turn + " won. ****")
            break

        # up and down
        elif theBoard['1'] == theBoard['6'] == theBoard['11'] != ' ' or theBoard['6'] == theBoard['11'] == theBoard['16'] != ' ' or theBoard['11'] == theBoard['16'] == theBoard['21'] != ' ':
            printBoard(theBoard)
            print("\nGame Over.\n")
            print(" **** " +turn + " won. ****")
            break
        elif theBoard['2'] == theBoard['7'] == theBoard['12'] != ' ' or theBoard['7'] == theBoard['12'] == theBoard['17'] != ' ' or theBoard['12'] == theBoard['17'] == theBoard['22'] != ' ':
            printBoard(theBoard)
            print("\nGame Over.\n")
            print(" **** " +turn + " won. ****")
            break
        elif theBoard['3'] == theBoard['8'] == theBoard['13'] != ' ' or theBoard['8'] == theBoard['13'] == theBoard['18'] != ' ' or theBoard['13'] == theBoard['18'] == theBoard['23'] != ' ':
            printBoard(theBoard)
            print("\nGame Over.\n")
            print(" **** " +turn + " won. ****")
            break
        elif theBoard['4'] == theBoard['9'] == theBoard['14'] != ' ' or theBoard['9'] == theBoard['14'] == theBoard['19'] != ' ' or theBoard['14'] == theBoard['19'] == theBoard['24'] != ' ':
            printBoard(theBoard)
            print("\nGame Over.\n")
            print(" **** " +turn + " won. ****")
            break
        elif theBoard['5'] == theBoard['10'] == theBoard['15'] != ' ' or theBoard['10'] == theBoard['15'] == theBoard['20'] != ' ' or theBoard['15'] == theBoard['20'] == theBoard['25'] != ' ':
            printBoard(theBoard)
            print("\nGame Over.\n")
            print(" **** " +turn + " won. ****")
            break

        # diagonals
        elif theBoard['1'] == theBoard['7'] == theBoard['13'] != ' ' or theBoard['7'] == theBoard['13'] == theBoard['19'] != ' ' or theBoard['13'] == theBoard['19'] == theBoard['25'] != ' ':
            printBoard(theBoard)
            print("\nGame Over.\n")
            print(" **** " +turn + " won. ****")
            break
        elif theBoard['2'] == theBoard['8'] == theBoard['14'] != ' ' or theBoard['8'] == theBoard['14'] == theBoard['20'] != ' ':
            printBoard(theBoard)
            print("\nGame Over.\n")
            print(" **** " +turn + " won. ****")
            break
        elif theBoard['3'] == theBoard['19'] == theBoard['15'] != ' ':
            printBoard(theBoard)
            print("\nGame Over.\n")
            print(" **** " +turn + " won. ****")
            break
        elif theBoard['6'] == theBoard['12'] == theBoard['18'] != ' ' or theBoard['12'] == theBoard['18'] == theBoard['24'] != ' ':
            printBoard(theBoard)
            print("\nGame Over.\n")
            print(" **** " +turn + " won. ****")
            break
        elif theBoard['11'] == theBoard['17'] == theBoard['23'] != ' ':
            printBoard(theBoard)
            print("\nGame Over.\n")
            print(" **** " +turn + " won. ****")
            break
        elif theBoard['5'] == theBoard['9'] == theBoard['13'] != ' ' or theBoard['9'] == theBoard['13'] == theBoard['17'] != ' ' or theBoard['13'] == theBoard['17'] == theBoard['21'] != ' ':
            printBoard(theBoard)
            print("\nGame Over.\n")
            print(" **** " +turn + " won. ****")
            break
        elif theBoard['4'] == theBoard['8'] == theBoard['12'] != ' ' or theBoard['8'] == theBoard['12'] == theBoard['16'] != ' ':
            printBoard(theBoard)
            print("\nGame Over.\n")
            print(" **** " +turn + " won. ****")
            break
        elif theBoard['3'] == theBoard['7'] == theBoard['11'] != ' ':
            printBoard(theBoard)
            print("\nGame Over.\n")
            print(" **** " +turn + " won. ****")
            break
        elif theBoard['10'] == theBoard['14'] == theBoard['18'] != ' ' or theBoard['14'] == theBoard['18'] == theBoard['22'] != ' ':
            printBoard(theBoard)
            print("\nGame Over.\n")
            print(" **** " +turn + " won. ****")
            break
        elif theBoard['15'] == theBoard['19'] == theBoard['23'] != ' ':
            printBoard(theBoard)
            print("\nGame Over.\n")
            print(" **** " +turn + " won. ****")
            break


        # If neither X nor O wins and the board is full, we'll declare the result as 'tie'.
        if count == 9:
            print("\nGame Over.\n")
            print("It's a Tie!!")

        # Now we have to change the player after every move.
        if turn =='X':
            turn = 'O'
        else:
            turn = 'X'

    # Now we will ask if player wants to restart the game or not.
    restart = input("Do want to play Again?(y/n)")
    if restart == "y" or restart == "Y":
        for key in board_keys:
            theBoard[key] = " "

        game()

if __name__ == '__main__':
    game()
