const LogFoodExpanded = () => {
    return(
        <>
            <hr style={{ border: '3px solid', borderRadius: '3px', color: "black"}}></hr> 
            <Row className='align-items-center'>
                <Col xs={8}>
                    <InputGroup> 
                        <InputGroup.Text><span className='pe-1' style={{ color: 'blue'}}>@</span>Name</InputGroup.Text> 
                        <FormControl
                        type='text'
                        placeholder='name'
                        />
                        <InputGroup.Text>
                            0z
                        </InputGroup.Text>
                    </InputGroup>
                </Col> 
                <Col>
                    <InputGroup >
                        <ButtonGroup>
                            <Button onClick={(e) => handleClickQuant(e)} name='subtract' variant='primary'>-</Button>
                            <Button onClick={(e) => handleClickQuant(e)} name='add' variant='primary'>+</Button>
                        </ButtonGroup>
                    </InputGroup>
                </Col>
            </Row>
            <hr style={{ border: '3px solid', borderRadius: '3px', color: "black"}}></hr>
            <Row className='align-items-center'>
                <Col xs={8}>
                    <InputGroup> 
                        <InputGroup.Text><span className='pe-1' style={{ color: 'blue'}}>@</span></InputGroup.Text>
                        <Dropdown>
                            <Dropdown.Toggle size='sm' variant='primary'> 
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>Ounces</Dropdown.Item>
                                <Dropdown.Item>Fluid Ounces</Dropdown.Item> 
                            </Dropdown.Menu>
                        </Dropdown>
                        <FormControl
                        type='text'
                        placeholder={quant}
                        />
                        <InputGroup.Text>
                            0z
                        </InputGroup.Text>
                    </InputGroup>
                </Col> 
                <Col>
                    <InputGroup>
                        <ButtonGroup>
                            <Button onClick={(e) => handleClickQuant(e)} name='subtract' variant='primary'>-</Button>
                            <Button onClick={(e) => handleClickQuant(e)} name='add' variant='primary'>+</Button>
                        </ButtonGroup>
                    </InputGroup>
                </Col>
            </Row>
            <hr style={{ border: '3px solid', borderRadius: '3px', color: "black"}}></hr>
            <Row style={{ width: 'fit-content'}}>
                    {radioIcons.map((radio, index) => (
                        <Col className='pe-0'>
                            <ToggleButton 
                                key={index}
                                id={`radio-${index}`}
                                type='radio' 
                                value={radio.value} 
                                checked={radioValue == radio.value} 
                                variant='primary' 
                                style={{ borderRadius: '100%', border: '2px solid black'}}
                                onChange={(e) => setRadioValue(e.target.value)}
                            >
                                {radio?.svg}
                            </ToggleButton>
                            {/**
                             * 
                             * Use object property
                             * icons {
                             *  sun: (<svg></svg>)
                             * }
                             */}
                        </Col> 
                    ))} 
            </Row>
            <hr style={{ border: '3px solid', borderRadius: '3px', color: "black"}}></hr>
        </>
    )
}